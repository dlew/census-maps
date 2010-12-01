import sys
import csv

reader = csv.reader(open(sys.argv[1]))
f = open('out.txt', 'w')
for row in reader:
    f.write(row[1] + ", " + row[0] + ",\n")
f.close()
