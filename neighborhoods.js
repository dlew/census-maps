var NEIGHBORHOODS = {
	ARMATAGE: "Armatage",
	AUDUBON_PARK: "audubonpark",
	BANCROFT: "Bancroft",
	BELTRAMI: "Beltrami",
	BOTTINEAU: "Bottineau",
	BRYANT: "Bryant",
	BRYN_MAWR: "BrynMawr",
    CARAG: "CARAG",
    CEDAR_ISLES_DEAN: "CedarIslesDean",
    CEDAR_RIVERSIDE: "CedarRiverside",
    CENTRAL: "Central",
    CLEVELAND: "Cleveland",
    COLUMBIA_PARK: "Columbia",
    COMO: "Como",
    COOPER: "Cooper",
    CORCORAN: "Corcoran",
    DIAMOND_LAKE: "DiamondLake",
    DOWNTOWN_WEST: "DowtownWest",
    ECCO: "ECCO",
    EAST_HARRIET: "EastHarriet",
    EAST_ISLES: "EastIsles",
    ELLIOT_PARK: "ElliotPark",
    ERICSSON: "Ericsson",
    FIELD: "Field",
    FOLWELL: "Folwell",
    FULTON: "Fulton",
    JORDAN: "Jordan",
    HALE: "Hale",
    HARRISON: "Harrison",
	HAWTHORNE: "Hawthorn",
    HIAWATHA: "Hiawatha",
    HOLLAND: "Holland",
    HOWE: "Howe",
    KEEWAYDIN: "Keewaydin",
    KENNY: "Kenny",
    KENWOOD: "Kenwood",
    KING_FIELD: "KingField",
    LINDEN_HILLS: "LindenHills",
    LIND_BOHANON: "LindBohanon",
    LOGAN_PARK: "LoganPark",
    LONGFELLOW: "Longfellow",
    LORING_PARK: "LoringPark",
    LOWRY_HILL: "LowryHill",
    LOWRY_HILL_EAST: "LowryHillEast",
    LYNDALE: "Lyndale",
    LYNNHURST: "Lynnhurst",
    MARCY_HOLMES: "MarcyHolmes",
    MARSHALL_TERRACE: "MarshallTerrace",
    MCKINLEY: "MCKINLEYwithNORTHRIVERIND",
    MINNEHAHA: "Minnehaha",
    MORRIS_PARK: "MorrisPark",
    NEAR_NORTH: "NearNorth",
    NICOLLET_ISLAND_EAST_BANK: "NicolletIslandEastBank",
    NORTHEAST_PARK: "NortheastPark",
    NORTHROP: "northrop",
    NORTH_LOOP: "NorthLoop",
    PHILLIPS: "Phillips",
    PAGE: "Page",
    POWDERHORN_PARK: "PowderhornPark",
    PROSPECT_PARK_EAST_RIVER_ROAD: "ProspectParkEastRiverRd",
    REGINA: "regina",
    SEWARD: "Seward",
    SHERIDAN: "Sheridan",
    SHINGLE_CREEK: "ShingleCreek",
    STANDISH: "Standish",
    STEVENS_SQ_LORING_HGTS: "StevensSquareLoringHeights",
    ST_ANTHONY_EAST: "StAnthonyEast",
    ST_ANTHONY_WEST: "StAnthonywest",
    TANGLETOWN: "Tangletown",
    UNIVERSITY: "university",
    VENTURA_VILLAGE: "VenturaVillage",
    VICTORY: "Victory",
    WAITE_PARK: "WaitePark",
    WEBBER_CAMDEN: "WebberCamden",
    WENONAH: "Wenonah",
    WEST_CALHOUN: "WestCalhoun",
    WHITTIER: "Whittier",
    WILLARD_HAY: "WillardHay",
    WINDOM: "Windom",
    WINDOM_PARK: "WindomPark",
};

var BOUNDARIES = {};
BOUNDARIES[NEIGHBORHOODS.ARMATAGE] = [
	44.890767, -93.318794,
	44.905207, -93.318837,
	44.905101, -93.303537,
	44.897897, -93.30358,
	44.896118, -93.303409,
	44.894264, -93.303645,
	44.892561, -93.303709,
	44.891269, -93.30461,
	44.890722, -93.304739,
];
BOUNDARIES[NEIGHBORHOODS.AUDUBON_PARK] = [
	45.013178, -93.24734,
	45.025661, -93.247361,
	45.025692, -93.245022,
	45.025237, -93.244314,
	45.024266, -93.243585,
	45.023993, -93.243048,
	45.023887, -93.24234,
	45.023948, -93.237126,
	45.023629, -93.235838,
	45.023098, -93.234572,
	45.022279, -93.233349,
	45.020459, -93.231719,
	45.01967, -93.230667,
	45.019215, -93.229594,
	45.018897, -93.226762,
	45.013239, -93.22674,
];
BOUNDARIES[NEIGHBORHOODS.BANCROFT] = [
	44.926936, -93.26251,
	44.934137, -93.26251,
	44.934122, -93.24734,
	44.926906, -93.247318,
];
BOUNDARIES[NEIGHBORHOODS.BELTRAMI] = [
	44.991194, -93.246975,
	44.991664, -93.247318,
	44.998675, -93.24734,
	44.998705, -93.237813,
	44.99567, -93.238628,
	44.993667, -93.238091,
	44.991452, -93.236568,
	44.991467, -93.24616,
];
BOUNDARIES[NEIGHBORHOODS.BRYN_MAWR] = [
	44.959332, -93.328857,
	44.970111, -93.328643,
	44.97084, -93.32212,
	44.970567, -93.318493,
	44.980707, -93.318515,
	44.980661, -93.314309,
	44.978961, -93.313386,
	44.97799, -93.31212,
	44.977656, -93.311112,
	44.977261, -93.307872,
	44.976411, -93.303902,
	44.977261, -93.289504,
	44.975895, -93.290384,
	44.969747, -93.300469,
	44.969443, -93.302786,
	44.969595, -93.30534,
	44.966377, -93.317506,
	44.965906, -93.323987,
	44.963356, -93.324072,
	44.96249, -93.324652,
	44.960759, -93.324802,
	44.960152, -93.326969,
	44.959332, -93.327012,
];
BOUNDARIES[NEIGHBORHOODS.BOTTINEAU] = [
	45.006003, -93.272617,
	45.009841, -93.272917,
	45.011055, -93.272552,
	45.013133, -93.272939,
	45.013148, -93.263133,
	45.005275, -93.263133,
	45.005229, -93.267639,
	45.005032, -93.267639,
	45.005017, -93.26884,
	45.006018, -93.268905,
];
BOUNDARIES[NEIGHBORHOODS.BRYANT] = [
	44.926891, -93.274612,
	44.934091, -93.274655,
	44.934152, -93.262489,
	44.926921, -93.26251,
	44.926845, -93.27002,
	44.926754, -93.271351,
];
BOUNDARIES[NEIGHBORHOODS.CARAG] = [
    44.948357, -93.298275,
    44.948353, -93.288109,
    44.937676, -93.288227,
    44.937684, -93.298382
];
BOUNDARIES[NEIGHBORHOODS.CEDAR_ISLES_DEAN] = [
	44.948308, -93.328857,
	44.959317, -93.328965,
	44.959271, -93.327119,
	44.957328, -93.327227,
	44.95666, -93.327484,
	44.955035, -93.327076,
	44.954579, -93.325918,
	44.953471, -93.324137,
	44.953273, -93.320897,
	44.954321, -93.319802,
	44.954625, -93.319845,
	44.955065, -93.320425,
	44.955976, -93.319952,
	44.957161, -93.319802,
	44.9583, -93.318129,
	44.958224, -93.315232,
	44.956872, -93.315575,
	44.955566, -93.316712,
	44.954397, -93.314846,
	44.954443, -93.312013,
	44.95218, -93.31167,
	44.950464, -93.311563,
	44.948323, -93.318429,
];
BOUNDARIES[NEIGHBORHOODS.CEDAR_RIVERSIDE] = [
	44.966164, -93.25206,
	44.970476, -93.252704,
	44.972206, -93.251352,
	44.975849, -93.246911,
	44.977565, -93.245537,
	44.977292, -93.242576,
	44.976897, -93.241932,
	44.976062, -93.241675,
	44.975106, -93.241954,
	44.973573, -93.241374,
	44.973588, -93.241739,
	44.9755, -93.243542,
	44.975485, -93.245687,
	44.974195, -93.245924,
	44.969975, -93.245666,
	44.96996, -93.24204,
	44.970218, -93.240881,
	44.969094, -93.238392,
	44.968001, -93.232813,
	44.96536, -93.23292,
	44.965284, -93.229852,
	44.964737, -93.228951,
	44.964358, -93.230453,
	44.964327, -93.242426,
	44.964798, -93.244829,
	44.966164, -93.248627,
];
BOUNDARIES[NEIGHBORHOODS.CENTRAL] = [
	44.948338, -93.274806,
	44.948338, -93.262682,
	44.934152, -93.262446,
	44.934122, -93.274655,
];
BOUNDARIES[NEIGHBORHOODS.CLEVELAND] = [
	45.013178, -93.318408,
	45.024084, -93.318515,
	45.024039, -93.308322,
	45.013239, -93.308237,
];
BOUNDARIES[NEIGHBORHOODS.COLUMBIA_PARK] = [
	45.016796, -93.263133,
	45.018904, -93.263154,
	45.02102, -93.262639,
	45.022613, -93.262607,
	45.026253, -93.262693,
	45.027239, -93.263004,
	45.027595, -93.263015,
	45.027633, -93.263551,
	45.027572, -93.277745,
	45.027648, -93.278196,
	45.030196, -93.280535,
	45.032016, -93.281243,
	45.032455, -93.280835,
	45.033593, -93.281908,
	45.035397, -93.281844,
	45.035579, -93.247361,
	45.016758, -93.24734,
];
BOUNDARIES[NEIGHBORHOODS.COMO] = [
	44.975026, -93.207729,
	44.974958, -93.208619,
	44.975417, -93.211366,
	44.975865, -93.213372,
	44.975986, -93.214391,
	44.976654, -93.216441,
	44.97972, -93.222406,
	44.984395, -93.230839,
	44.987976, -93.237255,
	44.989585, -93.239851,
	44.991452, -93.241954,
	44.991482, -93.237147,
	44.993303, -93.237126,
	44.993288, -93.229895,
	44.991361, -93.226547,
	44.991679, -93.20775,
];
BOUNDARIES[NEIGHBORHOODS.COOPER] = [
	44.941428, -93.217835,
	44.953702, -93.217734,
	44.954116, -93.216441,
	44.954458, -93.215615,
	44.955331, -93.214016,
	44.954519, -93.213351,
	44.954033, -93.212814,
	44.952271, -93.210379,
	44.950973, -93.207997,
	44.950297, -93.206463,
	44.949621, -93.205626,
	44.948376, -93.205165,
	44.946941, -93.204188,
	44.945027, -93.203394,
	44.943341, -93.203051,
	44.941549, -93.203909,
];
BOUNDARIES[NEIGHBORHOODS.CORCORAN] = [
	44.937722, -93.247383,
	44.948368, -93.247404,
	44.948353, -93.238285,
	44.937646, -93.231118,
];
BOUNDARIES[NEIGHBORHOODS.DIAMOND_LAKE] =  [
	44.890828, -93.27502,
	44.903536, -93.274848,
	44.903004, -93.271072,
	44.9027, -93.271158,
	44.902228, -93.271651,
	44.90194, -93.271844,
	44.901332, -93.271844,
	44.897973, -93.271587,
	44.896073, -93.271716,
	44.896118, -93.268969,
	44.897957, -93.26884,
	44.898353, -93.268282,
	44.898277, -93.267725,
	44.900192, -93.266416,
	44.90118, -93.266265,
	44.902852, -93.266716,
	44.903338, -93.267102,
	44.903399, -93.253798,
	44.903642, -93.253219,
	44.902745, -93.25249,
	44.90156, -93.250902,
	44.900906, -93.249099,
	44.900876, -93.247511,
	44.897912, -93.247275,
	44.897881, -93.257103,
	44.895404, -93.257232,
	44.895495, -93.254035,
	44.892531, -93.254077,
	44.89244, -93.252897,
	44.890707, -93.252897,
];
BOUNDARIES[NEIGHBORHOODS.DOWNTOWN_WEST] =  [
	44.969565, -93.269506,
	44.969929, -93.271244,
	44.972601, -93.27781,
	44.97292, -93.278861,
	44.975424, -93.280814,
	44.97714, -93.281608,
	44.978946, -93.281543,
	44.978931, -93.280706,
	44.980433, -93.278389,
	44.984501, -93.272467,
	44.982088, -93.268991,
	44.984713, -93.265214,
	44.984258, -93.264291,
	44.9823, -93.261824,
	44.982012, -93.261566,
	44.981299, -93.259914,
	44.980798, -93.259592,
	44.980069, -93.258455,
	44.975349, -93.262424,
	44.97591, -93.263819,
	44.971129, -93.267832,
	44.970324, -93.269033,
];
BOUNDARIES[NEIGHBORHOODS.ECCO] =  [
    44.948338, -93.298259,
    44.937676, -93.298345,
    44.937646, -93.304009,
    44.943114, -93.30358,
    44.948399, -93.306327
];
BOUNDARIES[NEIGHBORHOODS.EAST_HARRIET] = [
	44.919628, -93.297894,
	44.923913, -93.29622,
	44.925022, -93.296585,
	44.92648, -93.296134,
	44.926754, -93.295662,
	44.9268, -93.293431,
	44.929625, -93.293431,
	44.929694, -93.307464,
	44.93043, -93.307883,
	44.931084, -93.308033,
	44.931296, -93.308355,
	44.931433, -93.308837,
	44.932466, -93.308526,
	44.933256, -93.308065,
	44.933871, -93.307539,
	44.936264, -93.3046,
	44.937456, -93.303849,
	44.937646, -93.303806,
	44.937684, -93.288227,
	44.919583, -93.288324,
];
BOUNDARIES[NEIGHBORHOODS.EAST_ISLES] = [
    44.948353, -93.29828,
    44.948368, -93.304954,
    44.951026, -93.304996,
    44.952833, -93.302314,
    44.953623, -93.301992,
    44.954154, -93.30152,
    44.955126, -93.301156,
    44.955642, -93.30137,
    44.956022, -93.301971,
    44.956402, -93.30313,
    44.956766, -93.303452,
    44.957859, -93.303173,
    44.960198, -93.30122,
    44.96082, -93.30122,
    44.960896, -93.292787,
    44.955506, -93.2968,
    44.952241, -93.298302,
];
BOUNDARIES[NEIGHBORHOODS.ELLIOT_PARK] = [
	44.965891, -93.269784,
	44.97002, -93.269312,
	44.971113, -93.267982,
	44.975925, -93.263819,
	44.974514, -93.260386,
	44.973922, -93.26,
	44.973208, -93.260515,
	44.969975, -93.25309,
	44.967181, -93.25397,
	44.966286, -93.25515,
	44.965891, -93.258069,
];
BOUNDARIES[NEIGHBORHOODS.ERICSSON] = [
	44.916042, -93.247318,
	44.926921, -93.247318,
	44.926906, -93.246074,
	44.925113, -93.246009,
	44.925068, -93.232148,
	44.926891, -93.232126,
	44.926906, -93.223608,
	44.919613, -93.218629,
	44.91627, -93.215067,
	44.916225, -93.216816,
	44.916407, -93.217696,
	44.916377, -93.239551,
	44.916194, -93.240516,
];
BOUNDARIES[NEIGHBORHOODS.FIELD] = [
	44.910283, -93.274763,
	44.919628, -93.27472,
	44.919689, -93.262575,
	44.911393, -93.262639,
	44.911225, -93.263927,
	44.911393, -93.264592,
	44.912046, -93.265321,
	44.912684, -93.26618,
	44.912684, -93.269227,
	44.912593, -93.269656,
	44.912259, -93.270364,
	44.911666, -93.270578,
	44.911362, -93.270729,
	44.911119, -93.271115,
];
BOUNDARIES[NEIGHBORHOODS.FOLWELL] = [
	45.013224, -93.308237,
	45.024069, -93.308322,
	45.023978, -93.293109,
	45.013133, -93.293066,
];
BOUNDARIES[NEIGHBORHOODS.FULTON] = [
	44.905298, -93.328986,
	44.917911, -93.329051,
	44.917866, -93.31506,
	44.918033, -93.31388,
	44.917091, -93.313043,
	44.91583, -93.310425,
	44.915435, -93.30873,
	44.905116, -93.308623,
];
BOUNDARIES[NEIGHBORHOODS.HALE] = [
	44.903368, -93.262661,
	44.910648, -93.262661,
	44.910693, -93.260665,
	44.91156, -93.259442,
	44.912183, -93.256824,
	44.912228, -93.254099,
	44.912441, -93.252468,
	44.912471, -93.251159,
	44.914249, -93.251116,
	44.914249, -93.24734,
	44.908839, -93.247372,
	44.907943, -93.249346,
	44.907487, -93.249743,
	44.905253, -93.25087,
	44.90526, -93.254367,
	44.903627, -93.253208,
	44.903406, -93.253831,
];
BOUNDARIES[NEIGHBORHOODS.HARRISON] = [
	44.980707, -93.318493,
	44.98397, -93.318579,
	44.984197, -93.313687,
	44.98441, -93.310919,
	44.984319, -93.29401,
	44.983348, -93.29416,
	44.982877, -93.294954,
	44.982528, -93.296757,
	44.982103, -93.297122,
	44.9806, -93.297164,
	44.979401, -93.287466,
	44.977838, -93.287315,
	44.9772, -93.289783,
	44.977109, -93.291779,
	44.97635, -93.303988,
	44.977216, -93.307807,
	44.977595, -93.310919,
	44.977975, -93.31212,
	44.978992, -93.313408,
	44.980691, -93.314331,
];
BOUNDARIES[NEIGHBORHOODS.HAWTHORNE] = [
	44.99913, -93.294117,
	45.005912, -93.294117,
	45.006337, -93.294311,
	45.013133, -93.294332,
	45.013133, -93.276007,
	45.011813, -93.275599,
	45.010463, -93.275836,
	45.007019, -93.275406,
	45.005426, -93.27517,
	45.002635, -93.275921,
	45.000344, -93.276672,
	44.999069, -93.276865,
];
BOUNDARIES[NEIGHBORHOODS.HIAWATHA] = [
	44.916491, -93.215432,
	44.919674, -93.218694,
	44.93043, -93.226118,
	44.930681, -93.20715,
	44.930871, -93.206549,
	44.930833, -93.205165,
	44.930484, -93.204725,
	44.930742, -93.203834,
	44.930727, -93.203212,
	44.929428, -93.203266,
	44.927901, -93.202997,
	44.927058, -93.203233,
	44.924521, -93.204467,
	44.923366, -93.205347,
	44.922226, -93.204403,
	44.921619, -93.204317,
	44.920403, -93.204746,
];
BOUNDARIES[NEIGHBORHOODS.HOLLAND] = [
	45.005259, -93.263111,
	45.016789, -93.263154,
	45.016758, -93.24734,
	45.007899, -93.247361,
	45.007899, -93.25249,
	45.007505, -93.25249,
	45.00752, -93.256953,
	45.006701, -93.256953,
	45.006003, -93.257468,
	45.005259, -93.257554,
];
BOUNDARIES[NEIGHBORHOODS.HOWE] = [
	44.930446, -93.226118,
	44.941291, -93.233521,
	44.941504, -93.204403,
	44.940759, -93.204403,
	44.939666, -93.204103,
	44.938831, -93.204467,
	44.938208, -93.205926,
	44.937661, -93.206055,
	44.9364, -93.204939,
	44.935595, -93.203781,
	44.93236, -93.20318,
	44.930765, -93.203223,
	44.930461, -93.204768,
	44.930825, -93.205218,
	44.930841, -93.206592,
	44.930658, -93.20715,
];
BOUNDARIES[NEIGHBORHOODS.JORDAN] = [
	45.013345, -93.318751,
	45.013254, -93.316412,
	45.013133, -93.294332,
	45.006306, -93.294311,
	45.005897, -93.294117,
	44.999145, -93.294075,
	44.999115, -93.297143,
	44.999175, -93.297937,
	44.999585, -93.299589,
	44.999479, -93.300705,
	44.999494, -93.302121,
	45.000389, -93.304975,
	45.001648, -93.305812,
	45.002407, -93.306005,
	45.006397, -93.312185,
	45.009492, -93.314888,
];
BOUNDARIES[NEIGHBORHOODS.KEEWAYDIN] = [
	44.905253, -93.237426,
	44.905542, -93.238478,
	44.908095, -93.235924,
	44.908915, -93.235602,
	44.912563, -93.233478,
	44.915982, -93.233478,
	44.916012, -93.222814,
	44.905374, -93.222921,
];
BOUNDARIES[NEIGHBORHOODS.KENWOOD] = [
	44.955612, -93.316498,
	44.956933, -93.315468,
	44.957996, -93.31521,
	44.961215, -93.314824,
	44.961276, -93.315704,
	44.962566, -93.315725,
	44.962612, -93.314824,
	44.963189, -93.31461,
	44.96621, -93.312356,
	44.967895, -93.310061,
	44.96876, -93.308086,
	44.969641, -93.304889,
	44.969626, -93.304353,
	44.966483, -93.304567,
	44.966407, -93.303301,
	44.96331, -93.303237,
	44.963022, -93.304803,
	44.961761, -93.304954,
	44.960273, -93.304396,
	44.95915, -93.304331,
	44.958239, -93.304675,
	44.9571, -93.305318,
	44.956705, -93.306026,
	44.956751, -93.306584,
	44.957039, -93.306863,
	44.957662, -93.30682,
	44.958816, -93.307743,
	44.959681, -93.308923,
	44.959605, -93.309674,
	44.95915, -93.310168,
	44.958269, -93.310168,
	44.95792, -93.310511,
	44.957874, -93.311949,
	44.957115, -93.31255,
	44.955582, -93.312249,
];
BOUNDARIES[NEIGHBORHOODS.KENNY] = [
	44.890737, -93.304825,
	44.891877, -93.304074,
	44.892941, -93.303602,
	44.894249, -93.303645,
	44.896103, -93.303452,
	44.905116, -93.303559,
	44.905071, -93.288238,
	44.900891, -93.288324,
	44.896149, -93.290555,
	44.8932, -93.293431,
	44.891771, -93.29489,
	44.890403, -93.295662,
];
BOUNDARIES[NEIGHBORHOODS.KING_FIELD] = [
	44.919545, -93.288324,
	44.937691, -93.288217,
	44.937722, -93.274698,
	44.919644, -93.274698,
];
BOUNDARIES[NEIGHBORHOODS.LINDEN_HILLS] = [
	44.917911, -93.329072,
	44.937676, -93.329051,
	44.937737, -93.321283,
	44.934122, -93.321304,
	44.934122, -93.318815,
	44.935048, -93.318815,
	44.935094, -93.314116,
	44.934198, -93.312271,
	44.93397, -93.310575,
	44.933529, -93.310254,
	44.932299, -93.312078,
	44.931767, -93.312271,
	44.930522, -93.31167,
	44.930522, -93.309975,
	44.929185, -93.30991,
	44.928577, -93.309524,
	44.926268, -93.310103,
	44.924612, -93.311348,
	44.923001, -93.311455,
	44.921543, -93.312743,
	44.921497, -93.315103,
	44.91972, -93.31506,
	44.919324, -93.314481,
	44.918762, -93.31418,
	44.918033, -93.313901,
	44.917881, -93.315082,
];
BOUNDARIES[NEIGHBORHOODS.LIND_BOHANON] = [
	45.037641, -93.299074,
	45.058426, -93.299096,
	45.058289, -93.286414,
	45.051135, -93.28356,
	45.043934, -93.284011,
	45.042099, -93.283689,
	45.042069, -93.286543,
	45.040234, -93.287122,
	45.035397, -93.288066,
	45.032713, -93.288109,
	45.035155, -93.29107,
	45.03658, -93.294332,
];
BOUNDARIES[NEIGHBORHOODS.LOGAN_PARK] = [
	44.99869, -93.257532,
	45.005912, -93.257532,
	45.006625, -93.256974,
	45.007429, -93.256996,
	45.00749, -93.252511,
	45.007884, -93.25249,
	45.007899, -93.247361,
	44.99869, -93.24734,
];
BOUNDARIES[NEIGHBORHOODS.LONGFELLOW] = [
	44.956508, -93.243649,
	44.955506, -93.241096,
	44.954595, -93.238757,
	44.953714, -93.234658,
	44.953198, -93.221891,
	44.95338, -93.219316,
	44.953699, -93.217771,
	44.941428, -93.217857,
	44.941261, -93.233585,
	44.950358, -93.239679,
	44.95338, -93.241975,
];
BOUNDARIES[NEIGHBORHOODS.LORING_PARK] = [
	44.964737, -93.286843,
	44.965694, -93.288045,
	44.970445, -93.28768,
	44.971918, -93.287444,
	44.97506, -93.28738,
	44.975349, -93.283346,
	44.975895, -93.281071,
	44.972905, -93.278861,
	44.972631, -93.277831,
	44.969869, -93.271008,
	44.96958, -93.269591,
	44.966012, -93.269827,
	44.966756, -93.274591,
	44.964616, -93.283925,
	44.964403, -93.285491,
];
BOUNDARIES[NEIGHBORHOODS.LOWRY_HILL] = [
	44.960881, -93.301349,
	44.962657, -93.303258,
	44.966438, -93.303258,
	44.966438, -93.304589,
	44.969535, -93.30431,
	44.969474, -93.301263,
	44.971447, -93.296499,
	44.972814, -93.294268,
	44.974028, -93.293645,
	44.975925, -93.290341,
	44.975956, -93.287444,
	44.968882, -93.287616,
	44.966271, -93.288431,
	44.960911, -93.292723,
]
BOUNDARIES[NEIGHBORHOODS.LOWRY_HILL_EAST] = [
    44.948368, -93.29828,
    44.952241, -93.298259,
    44.955521, -93.296757,
    44.962703, -93.291392,
    44.966483, -93.288195,
    44.948353, -93.288109,
];
BOUNDARIES[NEIGHBORHOODS.LYNDALE] = [
	44.948353, -93.288109,
	44.948338, -93.274806,
	44.937752, -93.274655,
	44.937676, -93.288217,
];
BOUNDARIES[NEIGHBORHOODS.LYNNHURST] = [
	44.905086, -93.308644,
	44.915419, -93.308773,
	44.915237, -93.305726,
	44.915435, -93.304482,
	44.915541, -93.303387,
	44.917334, -93.299654,
	44.919583, -93.297894,
	44.919552, -93.288324,
	44.905071, -93.28826,
];
BOUNDARIES[NEIGHBORHOODS.MARCY_HOLMES] = [
	44.98482, -93.256395,
	44.995943, -93.247597,
	44.995898, -93.247297,
	44.991558, -93.247318,
	44.991224, -93.247039,
	44.991452, -93.24616,
	44.991436, -93.241954,
	44.988447, -93.23822,
	44.984395, -93.230882,
	44.978961, -93.235173,
	44.981132, -93.240731,
	44.979234, -93.242276,
];
BOUNDARIES[NEIGHBORHOODS.MARSHALL_TERRACE] = [
	45.013178, -93.27296,
	45.0192, -93.274848,
	45.021202, -93.275771,
	45.021475, -93.276265,
	45.024539, -93.277338,
	45.027633, -93.279161,
	45.027633, -93.263047,
	45.026238, -93.262703,
	45.022598, -93.262596,
	45.021096, -93.262618,
	45.018942, -93.263175,
	45.013178, -93.263133,
];
BOUNDARIES[NEIGHBORHOODS.MCKINLEY] = [
	45.013133, -93.293066,
	45.023978, -93.293066,
	45.023841, -93.27944,
	45.021627, -93.279119,
	45.017107, -93.277488,
	45.015196, -93.27723,
	45.013755, -93.276007,
	45.013118, -93.276007,
];
BOUNDARIES[NEIGHBORHOODS.MINNEHAHA] = [
	44.905344, -93.222921,
	44.915982, -93.222792,
	44.915997, -93.217728,
	44.916255, -93.216805,
	44.914234, -93.21629,
	44.914128, -93.215647,
	44.913945, -93.211634,
	44.909174, -93.205605,
	44.90697, -93.200541,
	44.905344, -93.199189,
];
BOUNDARIES[NEIGHBORHOODS.MORRIS_PARK] = [
	44.896149, -93.222921,
	44.905374, -93.222942,
	44.90539, -93.207622,
	44.896301, -93.207643,
	44.896088, -93.208137,
	44.896073, -93.210862,
	44.894264, -93.210926,
	44.894233, -93.217943,
	44.896103, -93.217921,
];
BOUNDARIES[NEIGHBORHOODS.NEAR_NORTH] = [
	44.984425, -93.308237,
	44.991497, -93.308215,
	44.991482, -93.301971,
	44.995185, -93.301928,
	44.9952, -93.300726,
	44.997446, -93.300662,
	44.997415, -93.299417,
	44.998933, -93.299417,
	44.999509, -93.29901,
	44.999145, -93.297765,
	44.999039, -93.27678,
	44.998644, -93.276479,
	44.995716, -93.275836,
	44.994396, -93.275685,
	44.99262, -93.274419,
	44.992028, -93.276951,
	44.991907, -93.285148,
	44.990056, -93.287637,
	44.988159, -93.288646,
	44.988143, -93.294117,
	44.985639, -93.294096,
	44.985427, -93.29386,
	44.985063, -93.293989,
	44.984395, -93.294139,
];
BOUNDARIES[NEIGHBORHOODS.NICOLLET_ISLAND_EAST_BANK] = [
	44.98523, -93.261974,
	44.987263, -93.26472,
	44.989767, -93.266373,
	44.990207, -93.265944,
	44.990253, -93.264399,
	44.989646, -93.263068,
	44.98869, -93.262296,
	44.98913, -93.260322,
	44.992635, -93.250194,
	44.98482, -93.256416,
	44.986095, -93.258648,
];
BOUNDARIES[NEIGHBORHOODS.NORTHEAST_PARK] = [
	44.998644, -93.24734,
	45.005912, -93.24734,
	45.005927, -93.226762,
	45.012541, -93.220046,
	45.013254, -93.219595,
	45.013285, -93.217857,
	45.005988, -93.217621,
	45.006079, -93.207707,
	45.00177, -93.217728,
	45.001072, -93.219938,
	45.000814, -93.222663,
	45.00092, -93.225088,
	45.001679, -93.228264,
	45.002301, -93.23071,
	45.002164, -93.233671,
	45.001557, -93.235452,
	45.000131, -93.236997,
	44.998675, -93.237748,
];
BOUNDARIES[NEIGHBORHOODS.NORTHROP] = [
	44.911377, -93.262661,
	44.926906, -93.262532,
	44.926906, -93.247318,
	44.916012, -93.247297,
	44.916058, -93.248563,
	44.915906, -93.249872,
	44.915541, -93.25103,
	44.913809, -93.253241,
	44.913505, -93.254421,
	44.913566, -93.256159,
	44.913094, -93.258219,
	44.912517, -93.26,
	44.911864, -93.260944,
];
BOUNDARIES[NEIGHBORHOODS.NORTH_LOOP] = [
	44.97506, -93.287444,
	44.981906, -93.287315,
	44.987506, -93.288646,
	44.988705, -93.288538,
	44.99045, -93.287272,
	44.991922, -93.285148,
	44.992059, -93.277059,
	44.992317, -93.275342,
	44.991452, -93.27457,
	44.990541, -93.274505,
	44.99001, -93.27384,
	44.990314, -93.271952,
	44.989494, -93.269806,
	44.988583, -93.269033,
	44.987992, -93.267596,
	44.985988, -93.266501,
	44.984729, -93.265171,
	44.982118, -93.268991,
	44.984486, -93.272467,
	44.981344, -93.276823,
	44.979007, -93.280835,
	44.978916, -93.281565,
	44.977003, -93.281522,
	44.976032, -93.281565,
	44.97544, -93.283195,
];
BOUNDARIES[NEIGHBORHOODS.PAGE] = [
	44.90349, -93.274827,
	44.909128, -93.274741,
	44.909523, -93.271523,
	44.909979, -93.269935,
	44.911833, -93.269119,
	44.912183, -93.267767,
	44.912076, -93.266673,
	44.911681, -93.265901,
	44.910845, -93.264828,
	44.910633, -93.263905,
	44.910906, -93.262661,
	44.903384, -93.262661,
	44.903323, -93.267059,
	44.903839, -93.267317,
	44.903581, -93.269806,
	44.903095, -93.270922,
];
BOUNDARIES[NEIGHBORHOODS.PHILLIPS] = [
	44.948293, -93.274806,
	44.949796, -93.274591,
	44.951952, -93.273346,
	44.956143, -93.269935,
	44.957328, -93.269527,
	44.960911, -93.269484,
	44.960896, -93.262553,
	44.959104, -93.262553,
	44.959142, -93.249861,
	44.960942, -93.24985,
	44.960775, -93.247619,
	44.957358, -93.244185,
	44.955551, -93.24307,
	44.951907, -93.240838,
	44.948353, -93.23822,
];
BOUNDARIES[NEIGHBORHOODS.POWDERHORN_PARK] = [
	44.948353, -93.262639,
	44.948353, -93.247404,
	44.934091, -93.24734,
	44.934137, -93.262467,
];
BOUNDARIES[NEIGHBORHOODS.PROSPECT_PARK_EAST_RIVER_ROAD] = [
	44.968935, -93.22718,
	44.982042, -93.227062,
	44.977003, -93.217449,
	44.975941, -93.214574,
	44.974939, -93.208609,
	44.974999, -93.207707,
	44.954777, -93.20775,
];
BOUNDARIES[NEIGHBORHOODS.REGINA] = [
	44.919628, -93.274677,
	44.92686, -93.274698,
	44.926875, -93.273175,
	44.926708, -93.27148,
	44.926875, -93.26987,
	44.926921, -93.26251,
	44.919689, -93.262596,
];
BOUNDARIES[NEIGHBORHOODS.SEWARD] = [
	44.966255, -93.24985,
	44.965739, -93.247361,
	44.964676, -93.244421,
	44.964282, -93.241825,
	44.964327, -93.230817,
	44.964783, -93.228908,
	44.962551, -93.225582,
	44.957464, -93.218114,
	44.955566, -93.215303,
	44.955612, -93.213587,
	44.954671, -93.215218,
	44.95382, -93.217428,
	44.953349, -93.220153,
	44.953228, -93.222213,
	44.953562, -93.229187,
	44.953699, -93.234744,
	44.954503, -93.238735,
	44.955566, -93.241396,
	44.956751, -93.243735,
	44.959909, -93.246696,
	44.96082, -93.245795,
];
BOUNDARIES[NEIGHBORHOODS.SHERIDAN] = [
	44.998887, -93.273647,
	45.004046, -93.272574,
	45.006033, -93.272617,
	45.005988, -93.268948,
	45.004986, -93.26884,
	45.005001, -93.267703,
	45.005259, -93.267617,
	45.005229, -93.257554,
	44.99869, -93.257532,
	44.998675, -93.269033,
];
BOUNDARIES[NEIGHBORHOODS.SHINGLE_CREEK] = [
	45.043964, -93.319395,
	45.051241, -93.319523,
	45.051135, -93.29916,
	45.043903, -93.299139,
];
BOUNDARIES[NEIGHBORHOODS.STANDISH] = [
	44.925098, -93.246052,
	44.926906, -93.246052,
	44.926906, -93.247318,
	44.937691, -93.247383,
	44.937707, -93.231118,
	44.926921, -93.223672,
	44.926875, -93.232126,
	44.925068, -93.232126,
];
BOUNDARIES[NEIGHBORHOODS.STEVENS_SQ_LORING_HGTS] = [
	44.962688, -93.287991,
	44.965352, -93.288023,
	44.964699, -93.287187,
	44.964373, -93.286361,
	44.964267, -93.285577,
	44.964327, -93.284547,
	44.964358, -93.284343,
	44.96643, -93.276125,
	44.966559, -93.274409,
	44.966551, -93.273475,
	44.96583, -93.269988,
	44.962703, -93.269999,
];
BOUNDARIES[NEIGHBORHOODS.ST_ANTHONY_EAST] = [
	44.991027, -93.254914,
	44.994851, -93.257511,
	44.998705, -93.257554,
	44.998659, -93.24734,
	44.996383, -93.247426,
	44.995063, -93.248241,
	44.99262, -93.250215,
];
BOUNDARIES[NEIGHBORHOODS.ST_ANTHONY_WEST] = [
	44.989069, -93.260643,
	44.9913, -93.262199,
	44.992112, -93.264474,
	44.992787, -93.265064,
	44.992423, -93.266469,
	44.994654, -93.268025,
	44.993386, -93.271973,
	44.998857, -93.273668,
	44.99869, -93.269033,
	44.99869, -93.257532,
	44.995078, -93.257511,
	44.994593, -93.257382,
	44.991042, -93.254936,
];
BOUNDARIES[NEIGHBORHOODS.TANGLETOWN] = [
	44.90504, -93.288302,
	44.919537, -93.288302,
	44.919628, -93.274677,
	44.903505, -93.274806,
	44.905086, -93.28577,
];
BOUNDARIES[NEIGHBORHOODS.UNIVERSITY] = [
	44.970324, -93.240044,
	44.96999, -93.241889,
	44.96999, -93.245666,
	44.974195, -93.245902,
	44.975531, -93.245687,
	44.9755, -93.243542,
	44.974817, -93.242447,
	44.974195, -93.241847,
	44.972965, -93.24146,
	44.973512, -93.23807,
	44.975865, -93.237877,
	44.977777, -93.239121,
	44.979477, -93.242426,
	44.981192, -93.240774,
	44.978931, -93.235152,
	44.984425, -93.230882,
	44.982149, -93.227341,
	44.968943, -93.227148,
	44.970415, -93.230646,
	44.970764, -93.233092,
	44.971265, -93.23586,
	44.971599, -93.23734,
	44.97248, -93.23792,
	44.973254, -93.238156,
	44.972692, -93.241353,
];
BOUNDARIES[NEIGHBORHOODS.VENTURA_VILLAGE] = [
	44.96085, -93.26957,
	44.965785, -93.269763,
	44.965921, -93.255215,
	44.966255, -93.249979,
	44.960911, -93.245816,
	44.959696, -93.246911,
	44.960896, -93.248348,
	44.960911, -93.24985,
	44.95915, -93.249872,
	44.959104, -93.262575,
	44.960911, -93.262532,
];
BOUNDARIES[NEIGHBORHOODS.VICTORY] = [
	45.024069, -93.318493,
	45.03705, -93.318794,
	45.037672, -93.319223,
	45.042129, -93.319201,
	45.039309, -93.306692,
	45.035443, -93.306541,
	45.035427, -93.306048,
	45.031318, -93.305898,
	45.031303, -93.308473,
	45.024054, -93.308344,
];
BOUNDARIES[NEIGHBORHOODS.WAITE_PARK] = [
	45.025646, -93.24734,
	45.035534, -93.247297,
	45.03567, -93.226933,
	45.018927, -93.226869,
	45.018988, -93.228114,
	45.019246, -93.229637,
	45.019701, -93.230731,
	45.020459, -93.231761,
	45.021627, -93.232749,
	45.022704, -93.234036,
	45.023432, -93.235345,
	45.023917, -93.23674,
	45.023872, -93.242555,
	45.024099, -93.243263,
	45.024615, -93.243885,
	45.02551, -93.244658,
	45.025707, -93.245194,
];
BOUNDARIES[NEIGHBORHOODS.WEBBER_CAMDEN] = [
	45.024076, -93.308333,
	45.031318, -93.308494,
	45.031295, -93.305908,
	45.035435, -93.306026,
	45.035443, -93.306595,
	45.039347, -93.306713,
	45.037672, -93.299063,
	45.036701, -93.294997,
	45.036466, -93.29415,
	45.035253, -93.291371,
	45.034919, -93.290802,
	45.034222, -93.28988,
	45.03266, -93.28812,
	45.031492, -93.288023,
	45.029195, -93.286049,
	45.023948, -93.282702,
];
BOUNDARIES[NEIGHBORHOODS.WENONAH] = [
	44.895632, -93.247168,
	44.899721, -93.247168,
	44.900906, -93.247511,
	44.900663, -93.246267,
	44.900724, -93.243756,
	44.901651, -93.242447,
	44.902396, -93.241096,
	44.905542, -93.238499,
	44.905298, -93.237877,
	44.905344, -93.222942,
	44.897532, -93.222985,
	44.897425, -93.232405,
	44.89741, -93.237212,
];
BOUNDARIES[NEIGHBORHOODS.WEST_CALHOUN] = [
	44.937661, -93.329029,
	44.948368, -93.328857,
	44.948368, -93.318257,
	44.946971, -93.318021,
	44.945088, -93.319545,
	44.942688, -93.320296,
	44.940775, -93.320467,
	44.939757, -93.320274,
	44.938663, -93.319674,
	44.937707, -93.320038,
];
BOUNDARIES[NEIGHBORHOODS.WHITTIER] = [
	44.962688, -93.288002,
	44.962718, -93.27002,
	44.956872, -93.269999,
	44.956219, -93.270257,
	44.953471, -93.272402,
	44.951011, -93.274355,
	44.949416, -93.275042,
	44.948338, -93.27517,
	44.948338, -93.288109,
];
BOUNDARIES[NEIGHBORHOODS.WILLARD_HAY] = [
	44.984, -93.318579,
	45.001042, -93.31845,
	45.001648, -93.317313,
	45.001603, -93.315897,
	45.009613, -93.315876,
	45.009659, -93.317184,
	45.010387, -93.317184,
	45.010448, -93.318493,
	45.013285, -93.318601,
	45.006625, -93.312399,
	45.002362, -93.305941,
	45.001421, -93.305683,
	45.000419, -93.304975,
	44.999843, -93.303645,
	44.999479, -93.301542,
	44.999555, -93.299825,
	44.999464, -93.299074,
	44.99875, -93.299417,
	44.9974, -93.29946,
	44.997415, -93.300662,
	44.995185, -93.300705,
	44.99523, -93.301928,
	44.991512, -93.301928,
	44.991467, -93.308194,
	44.98441, -93.308258,
	44.984167, -93.313816,
	44.98397, -93.316176,
];
BOUNDARIES[NEIGHBORHOODS.WINDOM] = [
	44.890311, -93.295748,
	44.892257, -93.294568,
	44.895951, -93.290577,
	44.901089, -93.288345,
	44.90504, -93.288281,
	44.905086, -93.285728,
	44.90352, -93.274827,
	44.890479, -93.27502,
];
BOUNDARIES[NEIGHBORHOODS.WINDOM_PARK] = [
	45.005897, -93.24734,
	45.013163, -93.247318,
	45.013209, -93.219616,
	45.005972, -93.226526,
];