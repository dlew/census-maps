import os
import json

import xlrd

# Defines the fields to parse from econ files
#
# Currently only parsing "interesting" stats (where "interesting"
# is defined as "interesting to me")
ECON_FORMAT = [
    # EMPLOYMENT STATUS
    # Total Population 16 years and over
    { "field": "pop_total", "row": 8, "col": 2, "desc": "Total Population 16 years and over" },
    # Females 16 years and over
    { "field": "pop_female", "row": 17, "col": 2, "desc": "Females 16 years and over" },
    # Own children under 6 years
    { "field": "pop_children", "row": 20, "col": 2, "desc": "Own children under 6 years" },

    # COMMUTING TO WORK
    # Mean travel time to work (minutes)
    { "field": "commute_mean", "row": 31, "col": 2, "desc": "Mean travel time to work (minutes)" },
    
    # INCOME
    # Median household income
    { "field": "income_hh_median", "row": 2, "col": 6, "desc": "Median Household income" },
    # Median family income
    { "field": "income_family_median", "row": 25, "col": 6, "desc": "Median family income" },

    # POPULATION BELOW POVERTY LEVEL

    # POPULATION FOR WHOM POVERTY STATUS IS DETERMINED
]

def get_format_spec(format):
    spec = []
    for field in format:
        spec.append({
            "field": field["field"],
            "desc": field["desc"]
        })
    return spec

def parse_xls(format, sh, nh):
    for field in format:
        nh[field["field"]] = sh.cell_value(rowx=field["row"], colx=field["col"])

# Currently only parses 2000 data
# Records are in a known spot in each file
def parse_econ_file(path, nh):
    book = xlrd.open_workbook(path)
    sh = book.sheet_by_index(0)
    parse_xls(ECON_FORMAT, sh, nh)

def parse_econ_dir(path, nhs):
    for file in os.listdir(path):
        if file.endswith(".xls"):
            name = file[:-4]
            if name not in nhs:
                nhs[name] = {
                    "name": name
                }
            parse_econ_file(path + file, nhs[name])

def parse_housing_file(path):
    pass

def parse_housing_dir(path, nhs):
    pass

if __name__ == "__main__":
    nhs = {}
    parse_econ_dir("data/econ/", nhs)
    parse_housing_dir("data/housing", nhs)
    #print(json.dump(nhs))
    f = open('data.js', 'w')
    f.write("var NH_DATA = %s;" % json.dumps(nhs))
    f.write("\n\n\n")
    f.write("var NH_SPEC = %s;" % get_format_spec(ECON_FORMAT))
    f.close()
