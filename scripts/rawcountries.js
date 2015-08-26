var rawCountries = [
    {
        "country": "Afghanistan",
        "statistic": "Largest producer of opium, 95% of world's market ($64 billion), with 2.9 million opium farmers[1][2]",
        "field": "Drugs",
        "date": 2008,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Largest producer of cannabis, up to 3,500 tonnes of hashish in annual production[3][4]",
        "field": "Drugs",
        "date": 2010,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Largest producer of heroin, 380 tonnes of Heroin in annual production (~90% of global production)[5][6]",
        "field": "Drugs",
        "date": 2012,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Largest source of refugees, continuously since 1980[7]",
        "field": "Politics",
        "date": 2013,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Lowest electricity consumption per capita, 7.6 kWh per person per year [8]",
        "field": "Energy",
        "date": 2012,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Lowest annual energy consumption per capita, 90 kgoe per person per year",
        "field": "Energy",
        "date": 2011,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Highest infant mortality rate, 119.41 deaths per 1000 live births",
        "field": "Demographics",
        "date": 2013,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Highest annual prevalence of opiates use, 2.65% of population",
        "field": "Drugs",
        "date": 2009,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Largest recipient of foreign aid, $6,884,700,000 per year",
        "field": "Economy",
        "date": 2014,
        "iso": "AFG"
    },
    {
        "country": "Afghanistan",
        "statistic": "Worst place to grow old as per United Nations/HelpAge International Global AgeWatch Index[9][10]",
        "field": "Society",
        "date": 2014,
        "iso": "AFG"
    },
    {
        "country": "Andorra",
        "statistic": "Most tourist arrivals per capita, 22.5[11]",
        "field": "Economy",
        "date": 2011,
        "iso": "AND"
    },
    {
        "country": "Argentina",
        "statistic": "Largest exporter of pears, 490,000 tonnes[12][13]",
        "field": "Agriculture",
        "date": 2009,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Largest exporter of vegetable oil, US$2,715,890,000[14]",
        "field": "Agriculture",
        "date": 2009,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Highest consumption of beef per capita, 65.2 kilograms / year[15]",
        "field": "Consumption",
        "date": 2006,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Largest exporter of soccer players, 2,204[16]",
        "field": "Sports",
        "date": 2010,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Best performance at Paddle Tennis World Championship (men), 9 gold medals, 12 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Best performance at Paddle Tennis World Championship (women), 8 gold medals, 12 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Best performance at Roller Hockey World Championship (women), 5 gold medals, 8 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "ARG"
    },
    {
        "country": "Argentina",
        "statistic": "Best performance at World Polo Championship, 4 gold medals, 7 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "ARG"
    },
    {
        "country": "Australia",
        "statistic": "Largest wool producer, output of 475,000 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest sheep meat producer",
        "field": "Agriculture",
        "date": 2005,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest uranium reserves, 1,673,000 tons",
        "field": "Energy",
        "date": 2009,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest aluminium oxide producer, 18,312,000 tons",
        "field": "Industry",
        "date": 2006,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest bauxite producer, 67,000,000 tons",
        "field": "Industry",
        "date": 2011,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest lithium producer, 13,000 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest titanium producer, 1,291,000 tons",
        "field": "Industry",
        "date": 2003,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest zirconium producer, 426,000 tons",
        "field": "Industry",
        "date": 2005,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Largest tantalum producer, 435 tons per annum, 53% of world production",
        "field": "Industry",
        "date": 2008,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at Rugby League World Cups (men), 10 times winner (1957, 1968, 1970, 1975, 1977, 1988, 1992, 1995, 2000, 2013)",
        "field": "Sports",
        "date": 2014,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Winner of most Cricket World Cups (men), 5 (1987, 1999, 2003, 2007, 2015)[17]",
        "field": "Sports",
        "date": 2015,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Winner of most Women's Cricket World Cups, 6 (1978, 1982, 1988, 1997, 2005, 2013)",
        "field": "Sports",
        "date": 2013,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Most successful team in ICC World Twenty20 (Women), 3 time champions (2010 and 2012, 2014)",
        "field": "Sports",
        "date": 2014,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at ICF Canoe Polo World Championships (men), 3 gold medals",
        "field": "Sports",
        "date": 2009,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at Netball World Championships, 10 times winner",
        "field": "Sports",
        "date": 2011,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at World International Doubles Squash Championships",
        "field": "Sports",
        "date": 2009,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at World Team Squash Championships (men), 8 gold medals",
        "field": "Sports",
        "date": 2013,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at World Team Squash Championships (women), 9 gold medals",
        "field": "Sports",
        "date": 2014,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at Touch Football World Cups",
        "field": "Sports",
        "date": 2009,
        "iso": "AUS"
    },
    {
        "country": "Australia",
        "statistic": "Best performance at ITU Triathlon World Championships (women), 13 gold medals, 27 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "AUS"
    },
    {
        "country": "Austria",
        "statistic": "Best performance at FIS Alpine World Ski Championships (men), 44 gold medals, 120 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "AUT"
    },
    {
        "country": "Austria",
        "statistic": "Best performance at FIS Alpine World Ski Championships (women), 37 gold medals, 113 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "AUT"
    },
    {
        "country": "Austria",
        "statistic": "Best performance at FIS Ski Flying World Championships, 7 gold medals, 8 silver medals, 4 bronze medals",
        "field": "Sports",
        "date": 2014,
        "iso": "AUT"
    },
    {
        "country": "Azerbaijan",
        "statistic": "Largest percentage of area covered with mud volcanoes[18]",
        "field": "Geography",
        "date": 2009,
        "iso": "AZE"
    },
    {
        "country": "Bahamas",
        "statistic": "Highest personal and economic freedoms according to State of World Liberty Index",
        "field": "Economy",
        "date": 2015,
        "iso": "BHS"
    },
    {
        "country": "Bangladesh",
        "statistic": "Largest percentage of cultivated land, 68.6%",
        "field": "Agriculture\n Geography",
        "date": 2011,
        "iso": "BGD"
    },
    {
        "country": "Bangladesh",
        "statistic": "Largest contributor to UN Peacekeeper Force",
        "field": "Military",
        "date": 2013,
        "iso": "BGD"
    },
    {
        "country": "Bangladesh",
        "statistic": "Highest importance of religion, (tied with Nigeria and Somalia)",
        "field": "Demographics",
        "date": 2009,
        "iso": "BGD"
    },
    {
        "country": "Belgium",
        "statistic": "Best performance at UCI Cyclo-cross World Championships, Men, 26 gold medals, 62 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "BEL"
    },
    {
        "country": "Belgium",
        "statistic": "Best performance at UCI Road World Championships (Men's Road Race), 26 gold medals, 48 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "BEL"
    },
    {
        "country": "Belgium",
        "statistic": "Best performance at Motocross World Championship",
        "field": "Sports",
        "date": 2015,
        "iso": "BEL"
    },
    {
        "country": "Belgium",
        "statistic": "Largest producer of chicory roots",
        "field": "Agriculture",
        "date": 1992,
        "iso": "BEL"
    },
    {
        "country": "Botswana",
        "statistic": "Lowest environmental happiness according to Happy Planet Index, score of 22.6",
        "field": "Environment\n Quality of life",
        "date": 2012,
        "iso": "BWA"
    },
    {
        "country": "Botswana",
        "statistic": "Largest Diamond Producer (two largest mines export 21.7 mil carats combined[19])",
        "field": "Economy",
        "date": 1999,
        "iso": "BWA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest citrus producer, output of 20,682,309 tons",
        "field": "Agriculture",
        "date": 2007,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest orange producer, output of 35.6 million tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest dry bean producer, output of 3,800,000 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest coffee producer, output of 2,249,010 tons",
        "field": "Agriculture",
        "date": 2007,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest soybean producer, output of 90 million metric tons",
        "field": "Agriculture",
        "date": 2014,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest sugarcane producer, output of 739,267,000 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest sisal producer, output of 113,300 tons",
        "field": "Agriculture",
        "date": 2007,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest pineapple producer, output of 2,206,000 metric tons[20]",
        "field": "Agriculture",
        "date": 2009,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Highest government budget surplus, +US$77,300,000,000",
        "field": "Finance",
        "date": 2011,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest renewable freshwater resources, 8,233 km³/year",
        "field": "Geography",
        "date": 2011,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Largest niobium producer, 58,000 tons",
        "field": "Industry",
        "date": 2011,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at FIFA World Cups, 5 times winner (1958, 1962, 1970, 1994, 2002), 2 times runner-up (1950, 1998)",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Winner of most FIFA Club World Cups 4 (2000, 2005, 2006, 2012)",
        "field": "Sports",
        "date": 2014,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at FIFA Beach Soccer World Cup, 13 times winner (1995, 1996, 1997, 1998, 1999, 2000, 2002, 2003, 2004, 2006, 2007, 2008, 2009)",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at FIFA Futsal World Cup, 5 times winner (1989, 1992, 1996, 2008, 2012)",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at Beach Handball World Championships (men) , 4 gold medals, 5 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at Beach Handball World Championships (women) , 3 gold medals, 5 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at FIVB World Leagues, 9 times winner, 5 times runner-up",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Brazil",
        "statistic": "Best performance at FIVB Beach Volleyball World Championships, 11 gold medals, 29 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "BRA"
    },
    {
        "country": "Bulgaria",
        "statistic": "Largest rose oil producer, 70% of all oil in the world[21]",
        "field": "Agriculture",
        "date": 2011,
        "iso": "BGR"
    },
    {
        "country": "Bulgaria",
        "statistic": "Largest lavender oil producer[22]",
        "field": "Agriculture",
        "date": 2011,
        "iso": "BGR"
    },
    {
        "country": "Burundi",
        "statistic": "Highest rate of urbanisation, +6.8% of urban population per year",
        "field": "Demographics",
        "date": 2008,
        "iso": "BDI"
    },
    {
        "country": "Burundi",
        "statistic": "Lowest satisfaction with life according to Satisfaction with Life Index, 100",
        "field": "Quality of life",
        "date": 2006,
        "iso": "BDI"
    },
    {
        "country": "Cambodia",
        "statistic": "Longest alphabet[23] It consists of 33 consonants, 23 vowels (that make 47 sounds) and 12 independent vowels.",
        "field": "Education",
        "date": 1995,
        "iso": "KHM"
    },
    {
        "country": "Canada",
        "statistic": "Best reputation[24]",
        "field": "Demographics",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Highest opportunity ranking",
        "field": "Quality of Life",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest flax producer, output of 368,300 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest canary seed producer, output of 117,300 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest lentil producer, output of 1,880,500 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest producer of maple syrup, output of 14,890 cubic metres",
        "field": "Agriculture",
        "date": 1995,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest rapeseed producer, output of 15.4 million metric tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Highest average years in school (women), 15.0 years",
        "field": "Education",
        "date": 2010,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest number of lakes, estimated to be at least 2 million",
        "field": "Geography",
        "date": 0,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Largest water area, 891,163 km²[25]",
        "field": "Geography",
        "date": 2009,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Longest coastline, 243,792 km[26]",
        "field": "Geography",
        "date": 2009,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Most craters, 32[27]",
        "field": "Geography",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Longest border, length of 8,891 kilometres (5,525 mi), shared with United States",
        "field": "Geography",
        "date": 0,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Best performance at Winter Olympics Ice Hockey (men), 9 gold medals, 21 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Best performance at Winter Olympics Ice Hockey (women), 4 gold medals, 5 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Best performance at World Curling Men's Championships, 34 gold medals, 50 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Best performance at World Curling Women's Championships, 15 gold medals, 32 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Winner of most Women's Ice Hockey World Championships, 10 times winner",
        "field": "Sports",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Top position at Ice Hockey World Championships (men), 3690 points",
        "field": "Sports",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Canada",
        "statistic": "Top position at Ice Hockey World Championships (women), 3840 points",
        "field": "Sports",
        "date": 2015,
        "iso": "CAN"
    },
    {
        "country": "Central African Republic",
        "statistic": "Lowest GDP (PPP) per capita, 607 Int. $ (IMF est.)",
        "field": "Economy",
        "date": 2014,
        "iso": "CAF"
    },
    {
        "country": "Central African Republic",
        "statistic": "Lowest prosperity according to Legatum Prosperity Index",
        "field": "Quality of life",
        "date": 2014,
        "iso": "CAF"
    },
    {
        "country": "Chad",
        "statistic": "Highest child mortality rate",
        "field": "Demographics",
        "date": 2011,
        "iso": "TCD"
    },
    {
        "country": "Chad",
        "statistic": "Highest maternal mortality ratio",
        "field": "Demographics",
        "date": 2011,
        "iso": "TCD"
    },
    {
        "country": "Chile",
        "statistic": "Largest copper producer, 5,800,000 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "CHL"
    },
    {
        "country": "Chile",
        "statistic": "Largest lithium reserves, 7,500,000 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "CHL"
    },
    {
        "country": "Chile",
        "statistic": "Largest rhenium reserves tons",
        "field": "Industry",
        "date": 2005,
        "iso": "CHL"
    },
    {
        "country": "Chile",
        "statistic": "Largest recorded earthquake 9.5",
        "field": "Geology",
        "date": 2011,
        "iso": "CHL"
    },
    {
        "country": "China",
        "statistic": "Largest salt producer, 70,000,000 tons",
        "field": "Industry",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest agricultural sector output",
        "field": "Economy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest industrial sector output",
        "field": "Economy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest police force, 1,600,000 officers",
        "field": "Economy",
        "date": 2007,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest rice producer, output of 204,300,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest wheat producer, output of 121.7 million metric tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest garlic producer, output of 20,000,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tangerine producer, output of 14,152,000 tons",
        "field": "Agriculture",
        "date": 2007,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest peach and nectarine producer, output of 11,500,000 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest plum and sloe producer, output of 5,372,899 tons",
        "field": "Agriculture",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest persimmon producer, output of 3,259,334 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tomato producer, output of 33,911,702 tons",
        "field": "Agriculture",
        "date": 2008,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest watermelon producer, output of 70,000,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest chestnut producer, output of 1,700,000 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest walnut producer, output of 1,700,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest peanut producer, output of 16,700,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest eggplant producer, output of 28,800,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest carrot and turnip producer, output of 16,906,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest potato producer, output of 88.9 million metric tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest cabbage producer, output of 32,800,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest cauliflowers and broccoli producer, output of 9,500,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest spinach producer, output of 18,782,961 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest lettuce and chicory producer, output of 13,500,000 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest asparagus producer, output of 7,350,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest onion and shallot producer, output of 20,817,295 tons",
        "field": "Agriculture",
        "date": 2008,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest fish producer, output of 49,467,275 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest aquatic plants producer, output of 11,163,675 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest grape producer, output of 9,600,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest honey producer, output of 436,000 tons[28]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest mushroom and truffle producer, output of 5,008,850 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest cotton producer, output of 11,400,000 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest silk producer, output of 290,003 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tea producer, output of 1,623,000 million tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tobacco producer, output of 2,298,800 tons",
        "field": "Agriculture",
        "date": 2000,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest livestock of domestic sheep, 136,400,000 heads",
        "field": "Agriculture",
        "date": 2008,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest livestock of domestic pig, 425,600,000 heads",
        "field": "Agriculture",
        "date": 2007,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest pork (pig meat) producer, output of 56,096,000 ton",
        "field": "Agriculture",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest rice consumer, 156.3 million metric tons per year",
        "field": "Consumption",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest car market, 23,722,890 vehicles[29]",
        "field": "Consumption\n Transport",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest population, 1,371,100,000",
        "field": "Demographics",
        "date": "2015 (July 23)",
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest labour force, 797,600,000",
        "field": "Demographics\n Economy",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Best student performance in science according to Programme for International Student Assessment",
        "field": "Demographics\n Quality of life",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest electricity consumer, 5,463,800,000,000 MW·h per year",
        "field": "Consumption\n Energy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest electricity producer, 5,649,500,000,000 GWh",
        "field": "Energy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest wind power producer, 114,763 MW",
        "field": "Energy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest renewable energy producer, 1,300 TW·h per year",
        "field": "Energy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest hydroelectricity producer, 652.05 TW·h per year",
        "field": "Energy",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest coal producer, 3,650 million tons",
        "field": "Energy\n Industry",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest wind turbine producer[30]",
        "field": "Energy\n Industry",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest solar panel producer,[30]",
        "field": "Energy\n Industry",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest photovoltaics producer, output of 10,852 MW[30]",
        "field": "Energy\n Industry",
        "date": 2010,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Most carbon dioxide emissions, 10,330,000,000 metric tons",
        "field": "Environment",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest forex reserves, $3,899,285,000,000",
        "field": "Finance",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest exporter, $2,252,000,000,000[31]",
        "field": "Finance",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest current account balance, $213,800,000,000",
        "field": "Finance",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest elevation above the sea level, 8,848 m (29,029 ft) at Mount Everest (shared with Nepal)",
        "field": "Geography",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Longest land border length, 22,117 km (22,147 km if Hong Kong and Macao, the two special administrative regions are counted)",
        "field": "Geography",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Most countries bordered, 14 (16 if Hong Kong and Macao, the two special administrative regions are counted), the same number as with Russia",
        "field": "Geography",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest gold producer, 450 tonnes[32]",
        "field": "Industry",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest aluminium producer, 23,300,000 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest antimony producer, 120,000 tons",
        "field": "Industry",
        "date": 2010,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest arsenic producer",
        "field": "Industry",
        "date": 2012,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest bismuth producer, 7,600 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest cadmium producer, 3,000 tons",
        "field": "Industry",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest cement producer, 2,480,000,000 tons",
        "field": "Industry",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest fluorite producer, 3,000,000 tons",
        "field": "Industry",
        "date": 2006,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest iron producer, 1,500,000,000 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest manganese producer, 6,000,000 tons",
        "field": "Industry",
        "date": 2006,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest mercury producer, 1,150 tons",
        "field": "Industry",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tractor producer, vehicles",
        "field": "Industry",
        "date": 2010,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest pulp and paper producer, 99,300 tons",
        "field": "Industry",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest steel producer, 822,698,000 tons",
        "field": "Industry",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest steel producer, 543,748,000 tons",
        "field": "Industry",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest strontium producer, 700,000 tons",
        "field": "Industry",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tin reserves, 1,500,000 tons",
        "field": "Industry",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest tungsten producer, 52,000 tons",
        "field": "Industry",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest zinc producer, 3,100,000 tons",
        "field": "Industry",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest motor vehicle producer, 23,722,890 vehicles per year",
        "field": "Industry\n Transport",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest army by number of active troops, 2,285,000 troops[33]",
        "field": "Military",
        "date": 2005,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Best performance at women's badminton Uber Cup, 13 times winner",
        "field": "Sports",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Best performance at World Badminton Championships, 58 gold medals won",
        "field": "Sports",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Best performance at World Amateur Go Championship, 20 wins",
        "field": "Sports",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Best performance at World Table Tennis Championships, 35 team wins",
        "field": "Sports",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Best performance at World Weightlifting Championships (women), 159 gold medals, 266 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest GDP (PPP)",
        "field": "Economy",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest rate of execution per year,officially not released.at least 1700 (estimated)[34][35]",
        "field": "Demographics",
        "date": 2009,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Leading surveillance society according to the Privacy International[36]",
        "field": "Surveillance",
        "date": 2007,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Most internet users, 618,110,314[37]",
        "field": "Technology",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Most main line phones, 269,910,000[38]",
        "field": "Technology",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Most mobile cellular phones, 1,276,660,000[39]",
        "field": "Technology",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Highest International tourism expenditure, $164.9 billion",
        "field": "Tourism",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest total length of waterways, 110,000 km",
        "field": "Transport",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest total length of high-speed railways, 16,000 km",
        "field": "Transport",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest total length of controlled-access highways, 111,950 km",
        "field": "Transport",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Largest total length of rapid transit systems, 2255 km",
        "field": "Transport",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Longest railway tunnel, Line 3, Guangzhou Metro, 60,400 m (198,163 ft)",
        "field": "Structures",
        "date": 2010,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Tallest dam, Jinping-I Dam, 305 m (1,001 ft)",
        "field": "Structures",
        "date": 2014,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Longest bridge, Danyang–Kunshan Grand Bridge, 164,800 m (540,700 ft)",
        "field": "Structures\n Transport",
        "date": 2011,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Longest building, Great Wall of China, 8,851.8 km",
        "field": "Structures",
        "date": 0,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Most books published per year (new titles and re-editions), 440,000",
        "field": "Culture",
        "date": 2013,
        "iso": "CHN"
    },
    {
        "country": "China",
        "statistic": "Top position at World Chess Rankings (women), top 10 players average Elo rating of 2496",
        "field": "Sports",
        "date": 2015,
        "iso": "CHN"
    },
    {
        "country": "Colombia",
        "statistic": "Largest emerald producer",
        "field": "Industry",
        "date": 2009,
        "iso": "COL"
    },
    {
        "country": "Costa Rica",
        "statistic": "Highest environmental happiness according to Happy Planet Index, score of 76.1",
        "field": "Environment\n Quality of life",
        "date": 2009,
        "iso": "CRI"
    },
    {
        "country": "Cuba",
        "statistic": "Largest producer of Xanthosoma, output of 132,100 tonnes",
        "field": "Agriculture",
        "date": 2011,
        "iso": "CUB"
    },
    {
        "country": "Cuba",
        "statistic": "Winner of most Baseball World Cup (men), 25 gold medals",
        "field": "Sports",
        "date": 2011,
        "iso": "CUB"
    },
    {
        "country": "Cuba",
        "statistic": "Best performance at Boxing World Cup, 2 times winner (2006, 2008)",
        "field": "Sports",
        "date": 2008,
        "iso": "CUB"
    },
    {
        "country": "Cuba",
        "statistic": "Winner of most Volleyball World Cups (women), 4 (1989, 1991, 1995, 1999)",
        "field": "Sports",
        "date": 2011,
        "iso": "CUB"
    },
    {
        "country": "Czech Republic",
        "statistic": "Highest consumption of beer per capita, 148.6 litres / year[40]",
        "field": "Consumption",
        "date": 2012,
        "iso": "CZE"
    },
    {
        "country": "Czech Republic",
        "statistic": "Largest poppy seed producer, output of 12,814 tonnes",
        "field": "Agriculture",
        "date": 2012,
        "iso": "CZE"
    },
    {
        "country": "Côte d'Ivoire",
        "statistic": "Largest cacao producer, output of 1,330,000 metric tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "CIV"
    },
    {
        "country": "Democratic Republic of Congo",
        "statistic": "Highest poverty, 95.15% of population living under 2 dollar (PPP) a day",
        "field": "Demographics\n Economy",
        "date": 2010,
        "iso": "CZE"
    },
    {
        "country": "Democratic Republic of the Congo",
        "statistic": "Highest percentage of population suffering from undernourishment, 75%",
        "field": "Demographics",
        "date": 2006,
        "iso": "CZE"
    },
    {
        "country": "Democratic Republic of the Congo",
        "statistic": "Highest energy intensity, 4746.3 toe per 1 million dollars of GDP",
        "field": "Energy",
        "date": 2003,
        "iso": "CZE"
    },
    {
        "country": "Democratic Republic of the Congo",
        "statistic": "Largest cobalt producer, 22,000 tons",
        "field": "Industry",
        "date": 2005,
        "iso": "CZE"
    },
    {
        "country": "Denmark",
        "statistic": "Most equal income distribution according to UN[41]",
        "field": "Demographics\n Economy",
        "date": 1997,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Least corrupt country according to Transparency International[42]",
        "field": "Politics",
        "date": 2014,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Highest minimum wage, 22,713 (Intl. dollars)",
        "field": "Finance",
        "date": 2008,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Lowest central bank interest rate (tied with Switzerland), -0.75%",
        "field": "Finance",
        "date": 2015,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Most northernmost point on land, 83°40'N at Kaffeklubben Island,  Greenland",
        "field": "Geography",
        "date": 2009,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Highest E-readiness, 8.87 out of 10",
        "field": "Technology",
        "date": 2009,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Highest in ICT Development Index, with a score of 8.86",
        "field": "Technology",
        "date": 2013,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Best knowledge of English according to EF English Proficiency Index",
        "field": "Demographics\n Economy\n Education",
        "date": 2014,
        "iso": "DNK"
    },
    {
        "country": "Denmark",
        "statistic": "Highest satisfaction with life according to Satisfaction with Life Index, 273.4",
        "field": "Quality of life",
        "date": 2006,
        "iso": "DNK"
    },
    {
        "country": "Egypt",
        "statistic": "Largest artichoke producer, output of 387,704 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "EGY"
    },
    {
        "country": "Egypt",
        "statistic": "Largest date producer, output of 1,470,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "EGY"
    },
    {
        "country": "Egypt",
        "statistic": "Largest importer of wheat, 9.5 million tonnes per year[43][44]",
        "field": "Consumption",
        "date": 2013,
        "iso": "EGY"
    },
    {
        "country": "Egypt",
        "statistic": "Most heavily mined country, 23 million active mines[45]",
        "field": "Military",
        "date": 2013,
        "iso": "EGY"
    },
    {
        "country": "Eritrea",
        "statistic": "Lowest average weight per person",
        "field": "Health",
        "date": 2012,
        "iso": "ERI"
    },
    {
        "country": "Eritrea",
        "statistic": "Lowest ease of doing business, according to Ease of Doing Business Index",
        "field": "Economy\n Politics",
        "date": 2015,
        "iso": "ERI"
    },
    {
        "country": "Estonia",
        "statistic": "Lowest maternal death rate",
        "field": "Quality of life",
        "date": 2010,
        "iso": "EST"
    },
    {
        "country": "Estonia",
        "statistic": "Lowest importance of religion",
        "field": "Demographics",
        "date": 2009,
        "iso": "EST"
    },
    {
        "country": "Estonia",
        "statistic": "Highest prevalence of females in population, 0.84 males per female",
        "field": "Demographics",
        "date": 2009,
        "iso": "EST"
    },
    {
        "country": "Estonia",
        "statistic": "Largest shale oil producer",
        "field": "Energy Industry",
        "date": "Since before 1960",
        "iso": "EST"
    },
    {
        "country": "Ethiopia",
        "statistic": "Earliest human settlement, 195,000 years ago",
        "field": "Demographics",
        "date": 2010,
        "iso": "ETH"
    },
    {
        "country": "Ethiopia",
        "statistic": "Best performance at World Cross Country Running Championships, 27 wins",
        "field": "Sports",
        "date": 2009,
        "iso": "ETH"
    },
    {
        "country": "Ethiopia",
        "statistic": "Lowest Web Index score according to the World Wide Web Foundation, 0",
        "field": "Technology",
        "date": 2014,
        "iso": "ETH"
    },
    {
        "country": "Federated States of Micronesia",
        "statistic": "Highest coastline to area ratio, 8,706.553 m/km²",
        "field": "Geography",
        "date": 2009,
        "iso": "FSM"
    },
    {
        "country": "Fiji",
        "statistic": "Best performance at Rugby World Cup Sevens (men), 2 times winner (1997, 2005) (tied with New Zealand)",
        "field": "Sports",
        "date": 2013,
        "iso": "FJI"
    },
    {
        "country": "Finland",
        "statistic": "Highest consumption of coffee per capita, 11.4 kg / year[46]",
        "field": "Consumption",
        "date": 2008,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Highest consumption of milk per capita, 361.19 kg / year[47]",
        "field": "Consumption",
        "date": 2007,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Most stable country according to Failed States Index, score of 17.8",
        "field": "Politics",
        "date": 2015,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Most property rights according to International Property Rights Index, score of 8.5[48]",
        "field": "Politics",
        "date": 2014,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Most press freedom according to Freedom of the Press (report)",
        "field": "Politics",
        "date": 2011,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Most freedom of press according to Press Freedom Index",
        "field": "Politics",
        "date": 2014,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Best performance at Drivers' World Rally Championship, 14 wins by 7 drivers",
        "field": "Sports",
        "date": 2014,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Most technologically advanced according to the UN's Technology Achievement Index, 0.744[49]",
        "field": "Technology",
        "date": 2001,
        "iso": "FIN"
    },
    {
        "country": "Finland",
        "statistic": "Most Olympic medals per capita. [50]",
        "field": "Sports",
        "date": 0,
        "iso": "FIN"
    },
    {
        "country": "France",
        "statistic": "Largest indigenous duck meat producer[51]",
        "field": "Agriculture",
        "date": 2005,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Largest wine producer, output of 5,286,414 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Largest producer of pharmaceutical products[52]",
        "field": "Industry",
        "date": 2007,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Largest exporter of perfume[53]",
        "field": "Industry",
        "date": 2007,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Largest percentage of nuclear energy in total energy production, 76.9%",
        "field": "Energy",
        "date": 2014,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Largest electricity exporter, 67,600 million kWh",
        "field": "Energy",
        "date": 2007,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Most time zones (overseas territories included), 12",
        "field": "Geography",
        "date": 2009,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Best performance at World Championships of Basque Pelota, 62 gold medals, 153 total medals",
        "field": "Sports",
        "date": 2010,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Best performance at UCI Road World Championships (Women's Road Race), 10 gold medals, 17 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Best performance at UCI Track World Championships (cycling), 138 gold medals, 365 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Best performance at Endurance FIM World Championship (motorcycle racing)",
        "field": "Sports",
        "date": 2009,
        "iso": "FRA"
    },
    {
        "country": "France",
        "statistic": "Most tourist visits per year, 83.7 million",
        "field": "Tourism",
        "date": 2014,
        "iso": "FRA"
    },
    {
        "country": "Gambia",
        "statistic": "Least militarized society",
        "field": "Military",
        "date": 2010,
        "iso": "GMB"
    },
    {
        "country": "Germany",
        "statistic": "Largest rye producer, output of 3,893,000 metric tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Largest hop producer, output of 34,434 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Largest net exports (balance of trade) country, 219,938 millions US$",
        "field": "Finance",
        "date": 2011,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Largest natural gas importer, 99,630,000,000 cu m",
        "field": "Consumption\n Energy",
        "date": 2010,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Largest producer of lignite, 183,000,000 tons",
        "field": "Energy\n Industry",
        "date": 2013,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Largest installed solar power capacity, 9,799 MWh",
        "field": "Energy",
        "date": 2009,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at FIBT World Championships (bobsleigh and skeleton), 54 gold medals, 146 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at ICF Canoe Polo World Championships (women), 2 gold medals, 3 total medals",
        "field": "Sports",
        "date": 2013,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at FEI World Equestrian Games, 34 gold medals, 83 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at equestrian Dressage World Championship, 18 gold medals",
        "field": "Sports",
        "date": 2014,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at Show Jumping World Championships (equestrian), 9 gold medals, 17 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at Fistball World Cup (women), 4 gold medals, 6 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at Fistball World Games (men), 4 gold medals, 6 total medals",
        "field": "Sports",
        "date": 2009,
        "iso": "DEU"
    },
    {
        "country": "Germany",
        "statistic": "Best performance at World Single Distance Championships for Women (speed skating), 35 gold medals, 74 total medals",
        "field": "Sports",
        "date": 2009,
        "iso": "DEU"
    },
    {
        "country": "Germany\n  East Germany\n  West Germany",
        "statistic": "Most Winter Olympic medals, 128 gold medals, 358 total medals[54]",
        "field": "Sports",
        "date": 2014,
        "iso": "DEU"
    },
    {
        "country": "Germany\n  East Germany\n  West Germany",
        "statistic": "Best performance at UCI Indoor Cycling World Championships, 89 gold medals, 226 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "DEU"
    },
    {
        "country": "Germany\n  East Germany\n  West Germany",
        "statistic": "Best performance at Fistball World Cup (men), 10 gold medals, 14 total medals",
        "field": "Sports",
        "date": 2011,
        "iso": "DEU"
    },
    {
        "country": "Germany\n  East Germany\n  West Germany",
        "statistic": "Best performance at FIL World Luge Championships, 96 gold medals, 237 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "DEU"
    },
    {
        "country": "Germany\n  East Germany\n  West Germany",
        "statistic": "Best performance at World Sprint Speed Skating Championships for Women, 19 gold medals, 42 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "DEU"
    },
    {
        "country": "Greece",
        "statistic": "Highest consumption of olive oil per capita, 26.1 kg / year [55]",
        "field": "Consumption",
        "date": 0,
        "iso": "GRC"
    },
    {
        "country": "Greece",
        "statistic": "Highest consumption of tobacco per capita, 4,313 cigarettes / year[56]",
        "field": "Consumption",
        "date": 2011,
        "iso": "GRC"
    },
    {
        "country": "Greece",
        "statistic": "Highest share of gold in total forex reserves, 74.9%",
        "field": "Finance",
        "date": 2015,
        "iso": "GRC"
    },
    {
        "country": "Guinea",
        "statistic": "Largest bauxite reserves, 7,400,000,000 tons",
        "field": "Industry",
        "date": 2010,
        "iso": "GIN"
    },
    {
        "country": "Haiti",
        "statistic": "Worst industrial production decline, -8.00% (CIA World Factbook est.)[57]",
        "field": "Industry",
        "date": 2010,
        "iso": "HTI"
    },
    {
        "country": "Honduras",
        "statistic": "Highest intentional homicide rate, 58 per 100000 people per year",
        "field": "Demographics",
        "date": 2008,
        "iso": "HND"
    },
    {
        "country": "Hungary",
        "statistic": "Best performance at FINA Water Polo World Cup (men), 3 times winner (1979, 1995, 1999), 3 times runner-up (1993, 2002, 2006)",
        "field": "Sports",
        "date": 2009,
        "iso": "HUN"
    },
    {
        "country": "Iceland",
        "statistic": "Highest level of gender equality in the economy according to Global Gender Gap Report",
        "field": "Demographics\n Economy",
        "date": 2014,
        "iso": "ISL"
    },
    {
        "country": "Iceland",
        "statistic": "Highest electricity consumption per capita, 3,152W per person",
        "field": "Consumption\n Energy",
        "date": 2005,
        "iso": "ISL"
    },
    {
        "country": "Iceland",
        "statistic": "Highest percentage of Internet users, 92%[58]",
        "field": "Technology",
        "date": 2009,
        "iso": "ISL"
    },
    {
        "country": "Iceland",
        "statistic": "Most northernmost southernmost point on land, 63°17'N at Surtsey island",
        "field": "Geography",
        "date": 2009,
        "iso": "ISL"
    },
    {
        "country": "Iceland",
        "statistic": "Most peaceful country according to Global Peace Index",
        "field": "Quality of life",
        "date": 2014,
        "iso": "ISL"
    },
    {
        "country": "Iceland",
        "statistic": "Highest annual energy consumption per capita, 16882.5 kgoe per person per year",
        "field": "Energy",
        "date": 2011,
        "iso": "ISL"
    },
    {
        "country": "India",
        "statistic": "Largest number of multi-dimensionally poor, 612 million[59]",
        "field": "Demographics",
        "date": 2011,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Highest number of undernourished people, 230 million[60]",
        "field": "Demographics",
        "date": 2013,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest millet producer, output of 10,910,000 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest banana producer, output of 24.9 million metric tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest lemon and lime producer, output of 2,060,000 tons[61]",
        "field": "Agriculture",
        "date": 2007,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest mango producer, output of 15,250,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest areca nut producer, output of 483,100 tons",
        "field": "Agriculture",
        "date": 2006,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest spice producer, output of 1,525,000 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest Mica producer, output of 60% of world",
        "field": "Mineral",
        "date": 2004,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest ginger producer, output of 703,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest chickpea producer, output of 8,832,000 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest milk producer, output of 110,040 tons",
        "field": "Agriculture",
        "date": 2009,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest butter producer, output of 1,470,000 tons",
        "field": "Agriculture",
        "date": 1997,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest jute producer, output of 1,924,326 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest livestock of water buffalos, 97,700,000 heads",
        "field": "Agriculture",
        "date": 2004,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest fennel producer, output of 110,000 tons",
        "field": "Agriculture",
        "date": 2008,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest total freshwater withdrawal, 645.84 km³/year",
        "field": "Agriculture\n Consumption",
        "date": 2000,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest area of irrigated land, 558,080 km²",
        "field": "Agriculture\n Geography",
        "date": 2003,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest tiger headcount, 2226 tigers",
        "field": "Environment",
        "date": 2014,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest producer of films, 2961 films including 1288 feature films[62]",
        "field": "Film Industry",
        "date": 2010,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest electronic spam producer, 13.7%",
        "field": "Technology",
        "date": 2011,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest Hindu population",
        "field": "Demographics",
        "date": 2005,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest Sikh population",
        "field": "Demographics",
        "date": 2005,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Highest number of doctors graduating",
        "field": "Demographics",
        "date": 2005,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Highest number of engineers graduating",
        "field": "Demographics",
        "date": 2005,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Lowest consumption of beer per capita, 2 L",
        "field": "Consumption",
        "date": 2005,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Largest Democracy, 1,270,000,000 people[63]",
        "field": "Politics",
        "date": 2014,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Most successful team in ICC World Twenty20 (men), (2007)",
        "field": "Sports",
        "date": 2015,
        "iso": "IND"
    },
    {
        "country": "India",
        "statistic": "Best performance at Summer Olympics Field Hockey (men), 8 gold medals, 11 total",
        "field": "Sports",
        "date": 2015,
        "iso": "IND"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest cinnamon producer, output of 60,000 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest clove producer, output of 110,000 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest coconut producer, output of 18,300,000 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest area of permanent crops, 128,581 km²",
        "field": "Agriculture\n Geography",
        "date": 2005,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Country with the most active volcanoes,",
        "field": "Geography",
        "date": 2005,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest islands by population, Java, 139,448,718",
        "field": "Geography",
        "date": 2014,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest island share by number of countries, Borneo (Brunei, Indonesia, Malaysia)",
        "field": "Geography",
        "date": 2010,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest island on an island, Samosir (North Sumatera)",
        "field": "Geography",
        "date": 2010,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest language without an official status anywhere (and thus the largest minority language), Javanese, 82,000,000",
        "field": "Demographics",
        "date": 2010,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest Muslim population",
        "field": "Demographics",
        "date": 2005,
        "iso": "IDN"
    },
    {
        "country": "Indonesia",
        "statistic": "Largest Buddhist temple, Borobudur",
        "field": "Structures",
        "date": 2005,
        "iso": "IDN"
    },
    {
        "country": "Iran",
        "statistic": "Largest Islamic Banking Sector, valued at 235.5 billion US dollars",
        "field": "Finance",
        "date": 2009,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest pistachio producer, output of 472,097 tons[64]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest saffron producer, 93.7% of world's total production[65]",
        "field": "Agriculture",
        "date": 2009,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest caviar producer[66]",
        "field": "Agriculture",
        "date": 2009,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest producer of stone fruits205,000 tonnes[64]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest producer of Berberis[67]",
        "field": "Agriculture",
        "date": 2009,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Hottest surface temperature ever recorded, 70.7 °C (159 °F) recorded at Dasht-e Lut[68]",
        "field": "Climate",
        "date": 2005,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Highest rate of brain drain",
        "field": "Demographics",
        "date": 2003,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest Shia Population",
        "field": "Demographics",
        "date": 2012,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Location with the highest natural background radiation, annual dose of 260 mSv",
        "field": "Geography",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Most number of major earthquakes, 5.5+ Richter Magnitude[69]",
        "field": "Geology",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Most accurate calendar in use, Iranian calendar",
        "field": "Geophysics",
        "date": 2013,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Highest ratio of female to male school enrollment,[70] 1.22 female per male student",
        "field": "Education",
        "date": 2005,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest number of former national capitals, 31 former capital cities",
        "field": "History",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest population of foreign refugees, Mostly Iraqi & Afghan refugees[71][72][73][74]",
        "field": "Humanitarian",
        "date": 1999,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest producer of Turquoise[75][76]",
        "field": "Industry",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest reserves of Zinc[77][78][79]",
        "field": "Industry",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest producer and exporter of handmade carpets[80][81][82]",
        "field": "Industry",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Fastest growth rate in science and technology, 1000% increase of science & technology output in nine years[83][84][85]",
        "field": "Science",
        "date": 2010,
        "iso": "IRN"
    },
    {
        "country": "Iran",
        "statistic": "Largest fleet of NGV, 3.50 million NGV in use[86]",
        "field": "Transportation",
        "date": 2013,
        "iso": "IRN"
    },
    {
        "country": "Iraq",
        "statistic": "Most terrorist activities in the world",
        "field": "Politics",
        "date": 2014,
        "iso": "IRQ"
    },
    {
        "country": "Ireland",
        "statistic": "Most Eurovision wins (7 between 1956 and 2012)",
        "field": "Culture",
        "date": 2015,
        "iso": "IRL"
    },
    {
        "country": "Ireland",
        "statistic": "Most globalized country according to Globalization Index, score of 92.17",
        "field": "Politics",
        "date": 2014,
        "iso": "IRL"
    },
    {
        "country": "Israel",
        "statistic": "Lowest depression below the sea level, -428 m at Dead Sea (shared with Jordan)",
        "field": "Geography",
        "date": 2012,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "Largest Jewish population 6,251,000",
        "field": "Demographics",
        "date": 2015,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "Highest percentage of recycled water, 80%",
        "field": "Environment",
        "date": 2010,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "The world leader in the use of solar energy per capita, 3% of the primary national energy consumption",
        "field": "Environment",
        "date": 2010,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "Longest hours spent on social networks, 11.1 per person per month",
        "field": "Technology",
        "date": 2011,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "Highest production of milk per cow, 12,240 kg per year",
        "field": "Agriculture",
        "date": 2009,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "Highest density of eco-friendly companies[87]",
        "field": "Technology",
        "date": 2011,
        "iso": "ISR"
    },
    {
        "country": "Israel",
        "statistic": "Most militarized society",
        "field": "Military",
        "date": 2010,
        "iso": "ISR"
    },
    {
        "country": "Italy",
        "statistic": "Largest kiwifruit producer, output of 384,844 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "ITA"
    },
    {
        "country": "Italy",
        "statistic": "Highest number of World Heritage Sites, 51",
        "field": "Culture",
        "date": 2015,
        "iso": "ITA"
    },
    {
        "country": "Italy",
        "statistic": "Best performance at Karting World Championship, 21 wins",
        "field": "Sports",
        "date": 2009,
        "iso": "ITA"
    },
    {
        "country": "Italy",
        "statistic": "Best performance at F1 Powerboat World Championship, 13 wins",
        "field": "Sports",
        "date": 2008,
        "iso": "ITA"
    },
    {
        "country": "Italy",
        "statistic": "Best performance at FIL World Luge Natural Track Championships, 29 gold medals, 85 total medals",
        "field": "Sports",
        "date": 2011,
        "iso": "ITA"
    },
    {
        "country": "Italy",
        "statistic": "Best performance at World Championships of Ski Mountaineering, 5 times winner (2006, 2008, 2010, 2013, 2014)",
        "field": "Sports",
        "date": 2014,
        "iso": "ITA"
    },
    {
        "country": "Italy",
        "statistic": "Largest feldspar producer, 4,700,000 tonnes",
        "field": "Industry",
        "date": 2011,
        "iso": "ITA"
    },
    {
        "country": "Japan",
        "statistic": "Lowest commercial bank prime lending rate, 1.50%",
        "field": "Finance",
        "date": 2014,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Largest net creditor nation",
        "field": "Finance",
        "date": 2014,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Highest public debt as percentage of GDP, 226.1%",
        "field": "Finance",
        "date": 2012,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Best performance at World Judo Championships, 121 gold medals, 287 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Best performance at Karate World Championships, 10 wins",
        "field": "Sports",
        "date": 2009,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Best performance at World Baseball Classic , 2 times winner (2006, 2009)",
        "field": "Sports",
        "date": 2013,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Best performance at Women's Baseball World Cup, 4 times winner (2008, 2010, 2012, 2014)",
        "field": "Sports",
        "date": 2014,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Most patents granted, 274,791",
        "field": "Technology",
        "date": 2012,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Most merchant ships owned, 3757",
        "field": "Transport",
        "date": 2008,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Longest life expectancy , 84.6 years",
        "field": "Health",
        "date": 2012,
        "iso": "JPN"
    },
    {
        "country": "Japan",
        "statistic": "Most three-starred Michelin restaurants, 32",
        "field": "Culture",
        "date": 2012,
        "iso": "JPN"
    },
    {
        "country": "Jordan",
        "statistic": "Lowest depression below the sea level, -428 m at Dead Sea (shared with Israel)",
        "field": "Geography",
        "date": 2012,
        "iso": "JOR"
    },
    {
        "country": "Kazakhstan",
        "statistic": "Largest freshwater withdrawal per capita, 5,104 m³/year",
        "field": "Agriculture\n Consumption",
        "date": 2000,
        "iso": "KAZ"
    },
    {
        "country": "Kazakhstan",
        "statistic": "Largest uranium producer, 22,451 tons",
        "field": "Energy\n Industry",
        "date": 2013,
        "iso": "KAZ"
    },
    {
        "country": "Kazakhstan",
        "statistic": "Largest landlocked country, 2,724,900 km²",
        "field": "Geography",
        "date": 2013,
        "iso": "KAZ"
    },
    {
        "country": "Kuwait",
        "statistic": "Highest current account balance as a percentage of GDP, 35.35%",
        "field": "Finance",
        "date": 2014,
        "iso": "KWT"
    },
    {
        "country": "Lebanon",
        "statistic": "Highest annual population growth, 9.73%",
        "field": "Demographics",
        "date": 2013,
        "iso": "LBN"
    },
    {
        "country": "Lebanon",
        "statistic": "Highest net migration rate, 83.82 migrants per 1000 persons",
        "field": "Demographics",
        "date": 2014,
        "iso": "LBN"
    },
    {
        "country": "Lesotho",
        "statistic": "Smallest volume of carbon dioxide emissions, 18,000 metric tons",
        "field": "Environment",
        "date": 2010,
        "iso": "LSO"
    },
    {
        "country": "Lesotho",
        "statistic": "Least carbon dioxide emissions per capita[90]",
        "field": "Environment",
        "date": 2010,
        "iso": "LSO"
    },
    {
        "country": "Lesotho",
        "statistic": "Highest lowest point among all countries, 1400 m",
        "field": "Geography",
        "date": 2009,
        "iso": "LSO"
    },
    {
        "country": "Libya",
        "statistic": "Worst GDP (real) decline, -19.80% (CIA World Factbook est.)[91]",
        "field": "Economy",
        "date": 2014,
        "iso": "LBY"
    },
    {
        "country": "Libya",
        "statistic": "Hottest air temperature ever recorded, 57.8 °C (136 °F)",
        "field": "Climate",
        "date": 1922,
        "iso": "LBY"
    },
    {
        "country": "Liechtenstein",
        "statistic": "Most exports per capita, $122,193 per person",
        "field": "Finance",
        "date": 2011,
        "iso": "LIE"
    },
    {
        "country": "Liechtenstein",
        "statistic": "Smallest double landlocked country, 160 km²",
        "field": "Geography",
        "date": 0,
        "iso": "LIE"
    },
    {
        "country": "Luxembourg",
        "statistic": "Highest consumption of wine per capita, 8.16 liters / year",
        "field": "Consumption",
        "date": 2011,
        "iso": "LUX"
    },
    {
        "country": "Luxembourg",
        "statistic": "Largest external debt per capita, $3,696,467",
        "field": "Finance",
        "date": 2014,
        "iso": "LUX"
    },
    {
        "country": "Luxembourg",
        "statistic": "Largest external debt as percentage of GDP, 3443%",
        "field": "Finance",
        "date": 2014,
        "iso": "LUX"
    },
    {
        "country": "Madagascar",
        "statistic": "Largest vanilla producer, output of 3,500 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "MDG"
    },
    {
        "country": "Madagascar",
        "statistic": "Highest commercial bank prime lending rate, 61%",
        "field": "Finance",
        "date": 2014,
        "iso": "MDG"
    },
    {
        "country": "Malawi",
        "statistic": "Lowest GDP (nominal) per capita",
        "field": "Economy",
        "date": 2014,
        "iso": "MWI"
    },
    {
        "country": "Malaysia",
        "statistic": "Tallest twin buildings, Kuala Lumpur City Centre, 1483 ft",
        "field": "Structures",
        "date": 1998,
        "iso": "MYS"
    },
    {
        "country": "Maldives",
        "statistic": "Lowest highest point among all countries, 2 m (7 ft)",
        "field": "Geography",
        "date": 2009,
        "iso": "MDV"
    },
    {
        "country": "Mexico",
        "statistic": "Largest avocado producer, output of 1,264,141 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "MEX"
    },
    {
        "country": "Mexico",
        "statistic": "Largest silver producer, 5,400 tons",
        "field": "Industry",
        "date": 2013,
        "iso": "MEX"
    },
    {
        "country": "Mexico",
        "statistic": "Largest producer of opuntia",
        "field": "Agriculture",
        "date": 0,
        "iso": "MEX"
    },
    {
        "country": "Moldova",
        "statistic": "Largest percentage of arable land, 54.52%",
        "field": "Agriculture\n Geography",
        "date": 2011,
        "iso": "MDA"
    },
    {
        "country": "Moldova",
        "statistic": "Highest rate of deurbanisation, -1.5% of urban population per year",
        "field": "Demographics",
        "date": 2008,
        "iso": "MDA"
    },
    {
        "country": "Moldova",
        "statistic": "Highest consumption of alcohol per capita, 18.22 litres / year",
        "field": "Consumption",
        "date": 2011,
        "iso": "MDA"
    },
    {
        "country": "Monaco",
        "statistic": "Most densely populated, 47,850 per km²",
        "field": "Demographics",
        "date": "2013 (December 31)",
        "iso": "MCO"
    },
    {
        "country": "Monaco",
        "statistic": "Highest median age of population, 51.1 years",
        "field": "Demographics",
        "date": 2014,
        "iso": "MCO"
    },
    {
        "country": "Monaco",
        "statistic": "Highest nominal Gross National Income per capita, $186,950",
        "field": "Finance",
        "date": 2008,
        "iso": "MCO"
    },
    {
        "country": "Mongolia",
        "statistic": "Least densely populated, 1.92 per km²",
        "field": "Demographics",
        "date": 2015,
        "iso": "MNG"
    },
    {
        "country": "Morocco",
        "statistic": "Largest phosphorus reserve, about 50 trillion metric tons of 67 trillion metric tons worldwide (about the 75% the world reserves)",
        "field": "Industry",
        "date": 2011,
        "iso": "MAR"
    },
    {
        "country": "Namibia",
        "statistic": "Least equal income distribution",
        "field": "Demographics\n Economy",
        "date": 2003,
        "iso": "NAM"
    },
    {
        "country": "Nepal",
        "statistic": "Highest elevation above the sea level, 8,848 m (29,029 ft) at Mount Everest (shared with China)",
        "field": "Geography",
        "date": 2009,
        "iso": "NPL"
    },
    {
        "country": "Netherlands",
        "statistic": "Tallest people, both men (1.837 m) and women (1.693 m)",
        "field": "Demographics",
        "date": 2009,
        "iso": "NLD"
    },
    {
        "country": "Netherlands",
        "statistic": "Lowest level of business corruption according to Bribe Payers Index, score of 8.8 (tied with Switzerland)",
        "field": "Economy\n Politics",
        "date": 2011,
        "iso": "NLD"
    },
    {
        "country": "Netherlands",
        "statistic": "Best performance at Field hockey World Cup (women), 7 times winner (1974, 1978, 1983, 1986*, 1990, 2006, 2014*)",
        "field": "Sports",
        "date": 2014,
        "iso": "NLD"
    },
    {
        "country": "Netherlands",
        "statistic": "Best performance at Korfball World Championship, 8 times winner",
        "field": "Sports",
        "date": 2011,
        "iso": "NLD"
    },
    {
        "country": "Netherlands",
        "statistic": "Best performance at World Junior Speed Skating Championships, 28 gold medals, 76 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "NLD"
    },
    {
        "country": "Netherlands",
        "statistic": "Best performance at World Single Distance Championships for Men (speed skating), 34 gold medals, 82 total medals",
        "field": "Sports",
        "date": 2009,
        "iso": "NLD"
    },
    {
        "country": "Netherlands",
        "statistic": "Best performance at FINA Water Polo World Cup (women), 8 times winner (1980, 1983, 1988, 1989, 1991, 1993, 1997, 1999)",
        "field": "Sports",
        "date": 2014,
        "iso": "NLD"
    },
    {
        "country": "New Zealand",
        "statistic": "Best performance at Women's Rugby World Cups, 4 times winner (1998, 2002, 2006, 2010)",
        "field": "Sports",
        "date": 2014,
        "iso": "NZL"
    },
    {
        "country": "New Zealand",
        "statistic": "Best performance at Rugby World Cup Sevens (men), 2 times winner (2001, 2013) (tied with Fiji)",
        "field": "Sports",
        "date": 2013,
        "iso": "NZL"
    },
    {
        "country": "New Zealand",
        "statistic": "Best performance at Women's Rugby League World Cups, 3 times winner (2000, 2005, 2008)",
        "field": "Sports",
        "date": 2013,
        "iso": "NZL"
    },
    {
        "country": "Niger",
        "statistic": "Highest birth rate, 46.84 births per 1000 persons",
        "field": "Demographics",
        "date": 2013,
        "iso": "NER"
    },
    {
        "country": "Niger",
        "statistic": "Highest fertility rate, 6.89 births per woman",
        "field": "Demographics",
        "date": 2014,
        "iso": "NER"
    },
    {
        "country": "Niger",
        "statistic": "Lowest median age of population, 15.1 years",
        "field": "Demographics",
        "date": 2014,
        "iso": "NER"
    },
    {
        "country": "Niger",
        "statistic": "Lowest Human Development Index (HDI), 0.337",
        "field": "Quality of life",
        "date": 2014,
        "iso": "NER"
    },
    {
        "country": "Niger",
        "statistic": "Worst situation with education according to Education Index, score of 0.198",
        "field": "Demographics\n Quality of life",
        "date": 2013,
        "iso": "NER"
    },
    {
        "country": "Nigeria",
        "statistic": "Largest yam producer, output of 38,000,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "NGA"
    },
    {
        "country": "Nigeria",
        "statistic": "Largest cassava producer, output of 41,565,000 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "NGA"
    },
    {
        "country": "Nigeria",
        "statistic": "Largest taro producer, output of 4,400,000 tons",
        "field": "Agriculture",
        "date": 2009,
        "iso": "NGA"
    },
    {
        "country": "Nigeria",
        "statistic": "Most HIV/AIDS deaths, 210,000",
        "field": "Demographics",
        "date": 2013,
        "iso": "NGA"
    },
    {
        "country": "Nigeria",
        "statistic": "Highest importance of religion, (tied with Bangladesh and Somalia)",
        "field": "Demographics",
        "date": 2009,
        "iso": "NGA"
    },
    {
        "country": "North Korea",
        "statistic": "Largest stadium, Rungrado 1st of May Stadium",
        "field": "Structures",
        "date": 1989,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Lowest public debt as percentage of GDP, 0.4%",
        "field": "Finance",
        "date": 2007,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Lowest level of economic freedom according to Index of Economic Freedom",
        "field": "Economy\n Politics",
        "date": 2015,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Largest military budget as % of GDP, 22.9%",
        "field": "Military",
        "date": 2003,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Most diesel submarines in operation, 70",
        "field": "Military",
        "date": 2011,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Most active troops per population, 47.8 per 1000 people",
        "field": "Military",
        "date": 2012,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Largest paramilitary, 5,889,000",
        "field": "Military",
        "date": 2012,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Smallest nuclear arsenal, <10 nuclear weapons[88]",
        "field": "Military",
        "date": 2014,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Youngest world leader currently in power, Kim Jong-un, at age 32",
        "field": "Politics",
        "date": 2015,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Lowest level of press freedom according to Freedom of the Press (report), 97/100",
        "field": "Politics",
        "date": 2015,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Lowest level of democracy according to Democracy Index, score of 1.08",
        "field": "Politics",
        "date": 2014,
        "iso": "PRK"
    },
    {
        "country": "North Korea",
        "statistic": "Most corrupt country according to Transparency International (tied with Somalia)[89]",
        "field": "Politics",
        "date": 2014,
        "iso": "PRK"
    },
    {
        "country": "Northern Cyprus",
        "statistic": "Largest illuminated flag, 450 × 225 m2[92][93]",
        "field": "Culture",
        "date": 1974,
        "iso": "CYP"
    },
    {
        "country": "Northern Cyprus",
        "statistic": "Oldest female paragliding fly, at the age of 104, from a 730 m (2,400 ft) peak",
        "field": "Sports",
        "date": 2012,
        "iso": "CYP"
    },
    {
        "country": "Norway",
        "statistic": "Most generous country by GNI 1.07%, Total aid: US$5.58 billion [94]",
        "field": "Economy",
        "date": 2013,
        "iso": "NOR"
    },
    {
        "country": "Norway",
        "statistic": "Highest Human Development Index (HDI), 0.944",
        "field": "Quality of life",
        "date": 2014,
        "iso": "NOR"
    },
    {
        "country": "Norway",
        "statistic": "Highest prosperity according to Legatum Prosperity Index",
        "field": "Quality of life",
        "date": 2014,
        "iso": "NOR"
    },
    {
        "country": "Norway",
        "statistic": "Longest road tunnel, Lærdal Tunnel, 24,510 m (80,413 ft)",
        "field": "Structures",
        "date": 2000,
        "iso": "NOR"
    },
    {
        "country": "Norway",
        "statistic": "Highest level of democracy according to Democracy Index, score of 9.93",
        "field": "Politics",
        "date": 2014,
        "iso": "NOR"
    },
    {
        "country": "Norway",
        "statistic": "Best performance at FIS Nordic World Ski Championships, 126 gold medals, 324 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "NOR"
    },
    {
        "country": "Norway",
        "statistic": "Best performance at World Allround Speed Skating Championships for Men, 36 gold medals, 98 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "NOR"
    },
    {
        "country": "Pakistan",
        "statistic": "Biggest refugee hosting country with 2.6 million Syrian refugees [95][96]",
        "field": "Demographics",
        "date": 2015,
        "iso": "PAK"
    },
    {
        "country": "Pakistan",
        "statistic": "Highest annual deflation, -12.96%",
        "field": "Finance",
        "date": 2014,
        "iso": "PAK"
    },
    {
        "country": "Pakistan",
        "statistic": "Highest Perinatal Mortality Rate; 433,800 newborn baby deaths per year[97][98]",
        "field": "Health",
        "date": 2012,
        "iso": "PAK"
    },
    {
        "country": "Pakistan",
        "statistic": "Best performance at Field hockey World Cup (men), 4 times winner (1971, 1978, 1982, 1994)",
        "field": "Sports",
        "date": 2014,
        "iso": "PAK"
    },
    {
        "country": "Pakistan",
        "statistic": "Most number of British Open Squash champions (men), 30 championships",
        "field": "Sports",
        "date": 2015,
        "iso": "PAK"
    },
    {
        "country": "Pakistan",
        "statistic": "Greatest number of World Open Squash champions (men), 14 championships",
        "field": "Sports",
        "date": 2014,
        "iso": "PAK"
    },
    {
        "country": "Panama",
        "statistic": "Most merchant ships registered, 6,323",
        "field": "Transport",
        "date": 2008,
        "iso": "PAN"
    },
    {
        "country": "Papua New Guinea",
        "statistic": "Highest annual prevalence of cannabis use, 29.5% of population",
        "field": "Demographics",
        "date": 1995,
        "iso": "PNG"
    },
    {
        "country": "Papua New Guinea",
        "statistic": "Most languages spoken in a country, 820 languages[99]",
        "field": "Demographics",
        "date": 2005,
        "iso": "PNG"
    },
    {
        "country": "Papua New Guinea",
        "statistic": "Best performance at Australian Football International Cup, 1 time winner (2008), 2 times runner-up (2002, 2005)",
        "field": "Sports",
        "date": 2008,
        "iso": "PNG"
    },
    {
        "country": "Paraguay",
        "statistic": "Best performance at AMF Futsal World Cup, 3 times winner, 3 times runner-up",
        "field": "Sports",
        "date": 2011,
        "iso": "PRY"
    },
    {
        "country": "Peru",
        "statistic": "Largest quinoa producer, output of 41,200 metric tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "PER"
    },
    {
        "country": "Peru",
        "statistic": "Largest maca producer, 4,589 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "PER"
    },
    {
        "country": "Philippines",
        "statistic": "Largest Abacá (Manila Hemp) producer[64]",
        "field": "Agriculture",
        "date": 2007,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Largest nickel producer, 330,000 tons",
        "field": "Industry",
        "date": 2012,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Largest business process outsourcing industry[100]",
        "field": "Industry",
        "date": 2010,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Largest indoor arena, Philippine Arena",
        "field": "Structures",
        "date": 2015,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Best performance at World Cup of Pool, 3 times winner (2006, 2009 and 2013)",
        "field": "Sports",
        "date": 2013,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Best performance at World Championships of Performing Arts, 10 times winner ( 2005, 2007, 2008, 2009, 2010, 2011, (2)2013 and (2)2014)",
        "field": "Culture",
        "date": 2014,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Best performance at Miss Tourism International, 3 times winner (2000, 2012 and 2013)",
        "field": "Culture",
        "date": 2014,
        "iso": "PHL"
    },
    {
        "country": "Philippines",
        "statistic": "Best proficiency in Business English according to GlobalEnglish [101]",
        "field": "Demographics\n Economy\n Education",
        "date": 2013,
        "iso": "PHL"
    },
    {
        "country": "Poland",
        "statistic": "Largest triticale producer, output of 3.7 million metric tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "POL"
    },
    {
        "country": "Poland",
        "statistic": "Best performance at motorcycle Speedway World Cup, 6 times winner",
        "field": "Sports",
        "date": 2015,
        "iso": "POL"
    },
    {
        "country": "Portugal",
        "statistic": "Earliest and longest of the modern colonial empires, 584 years (from 1415 to 1999)",
        "field": "Politics",
        "date": 2014,
        "iso": "PRT"
    },
    {
        "country": "Portugal",
        "statistic": "Largest cork producer, output of 17.7 metric tons",
        "field": "Agriculture",
        "date": 2009,
        "iso": "PRT"
    },
    {
        "country": "Portugal",
        "statistic": "Best driving road, Peso da Régua to Pinhão road, Avis driving ratio: 11,3:1[102]",
        "field": "Structures\n Tourism",
        "date": 2015,
        "iso": "PRT"
    },
    {
        "country": "Qatar",
        "statistic": "Most carbon dioxide emissions per capita, 44 metric tons",
        "field": "Environment",
        "date": 2009,
        "iso": "QAT"
    },
    {
        "country": "Qatar",
        "statistic": "Highest GDP (PPP) per capita, 143,427 Int. $ (IMF est.)",
        "field": "Economy",
        "date": 2014,
        "iso": "QAT"
    },
    {
        "country": "Republic of the Congo",
        "statistic": "Lowest energy intensity, 30.5 toe per 1 million dollars of GDP",
        "field": "Energy",
        "date": 2003,
        "iso": "COD"
    },
    {
        "country": "Republic of the Congo",
        "statistic": "Highest gross fixed investment as percentage of GDP, 51.9%",
        "field": "Finance",
        "date": 2012,
        "iso": "COD"
    },
    {
        "country": "Romania",
        "statistic": "Highest home ownership rate, 95.6%[103]",
        "field": "Quality of life\n Demographics",
        "date": 2013,
        "iso": "ROU"
    },
    {
        "country": "Romania",
        "statistic": "Best performance at Mini-football European Championship, 5 gold medals (2010, 2011, 2012, 2013, 2014)",
        "field": "Sports",
        "date": 2014,
        "iso": "ROU"
    },
    {
        "country": "Romania",
        "statistic": "Most International Mathematical Olympiads hosted, 5 (1959, 1960, 1969, 1978, 1999)",
        "field": "Education",
        "date": 2014,
        "iso": "ROU"
    },
    {
        "country": "Romania",
        "statistic": "Most participations at a World Women's Handball Championship, 21 (all)",
        "field": "Sports",
        "iso": "ROU"
    },
    {
        "country": "Russia",
        "statistic": "Largest barley producer, output of 15.4 million metric tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest buckwheat producer, output of 833,936 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest oats producer, output of 4,027,000 metric tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest sugar beet producer, output of 47.6 million metric tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest currant and gooseberry producer, output of 463,500 tons",
        "field": "Agriculture",
        "date": 2005,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest raspberry producer, output of 140,000 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest vetches producer, output of 377,750 tons[104]",
        "field": "Agriculture",
        "date": 2008,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Highest crude divorce rate, 4.8 per 1000 population",
        "field": "Demographics",
        "date": 2011,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest proven natural gas reserves, 48,700,000,000,000 m³",
        "field": "Energy",
        "date": 2013,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest natural gas exporter, 173,000,000,000 cu m",
        "field": "Energy",
        "date": 2007,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest oil producer, 10,107,000 bbl/d (1,606,900 m3/d)[105]",
        "field": "Energy\n Industry",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest forest area, 7,762,602 km²",
        "field": "Geography",
        "date": 2011,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest land area, 17,075,200 km²[106]",
        "field": "Geography",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest total area, 17,098,242 km²[107]",
        "field": "Geography",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest EEZ continental shelf area, 3,817,843 km²",
        "field": "Geography",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Most countries bordered, 14 (16 if Abkhazia and South Ossetia are counted), the same number as with China",
        "field": "Geography",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Most time zones (contiguous territory), 9",
        "field": "Geography",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest diamond producer, 38,000,000 carats (7,600 kg)",
        "field": "Industry",
        "date": 2005,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest palladium producer, 143 tons",
        "field": "Industry",
        "date": 2005,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest nuclear arsenal, 5,200 / 8,800 active/total warheads (2005 est)[108]",
        "field": "Military",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Largest tank army, 20,550 tanks",
        "field": "Military",
        "date": 2014,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Most corvettes in operation, 70",
        "field": "Military",
        "date": 2011,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Top position at World Chess Rankings (men), top 10 players average Elo rating of 2744",
        "field": "Sports",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Best performance at the World Sambo Championships, 58 gold medals, 99 total medals",
        "field": "Sports",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia",
        "statistic": "Most television broadcast stations, 7,306",
        "field": "Technology",
        "date": 1998,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Bandy World Championships for men, 23 (1957, 1961, 1963, 1965, 1967, 1969, 1971, 1973, 1975, 1977, 1979, 1985, 1989, 1991, 1999, 2001, 2006, 2007, 2008, 2011, 2013, 2014, 2015)",
        "field": "Sports",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Most World Chess Champions, 10",
        "field": "Sports",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at FIE World Championships in Fencing, 137 gold medals, 298 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Figure Skating Championships, 76 gold medals, 189 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Artistic Gymnastics Championships, 139 gold medals, 344 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Rhythmic Gymnastics Championships, 27 gold medals, 68 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at gymnastics at the Summer Olympics, 81 gold medals",
        "field": "Sports",
        "date": 2012,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at gymnastics Trampoline World Championships, 85 gold medals",
        "field": "Sports",
        "date": 2014,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Women's Handball Championship, 7 gold medals, 10 total medals",
        "field": "Sports",
        "date": 2013,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Ice Hockey World Championships (men), 30 times winner",
        "field": "Sports",
        "date": 2013,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at Team Ice Racing World Championship, 26 times winner",
        "field": "Sports",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Shooting Championships, 307 gold medals, 656 total medals",
        "field": "Sports",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Allround Speed Skating Championships for Women, 24 gold medals, 69 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Sprint Speed Skating Championships for Men, 12 gold medals, 26 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Summer Olympic Volleyball Tournaments (men), 4 (1964, 1968, 1980, 2012)",
        "field": "Sports",
        "date": 2012,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Summer Olympic Volleyball Tournaments (women), 4 (1968, 1972, 1980, 1988)",
        "field": "Sports",
        "date": 2012,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Volleyball World Championships (men), 6 (1949, 1952, 1960, 1962, 1978, 1982)",
        "field": "Sports",
        "date": 2014,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Volleyball World Championships (women), 7 (1952, 1956, 1960, 1970, 1990, 2006, 2010)",
        "field": "Sports",
        "date": 2014,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Winner of most Volleyball World Cups (men), 6 (1965, 1977, 1981, 1991, 1999, 2011)",
        "field": "Sports",
        "date": 2011,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at Canoeing at the Summer Olympics, 31 gold medals, 62 total medals",
        "field": "Sports",
        "date": 2012,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at World Weightlifting Championships (men), 350 gold medals, 746 total medals",
        "field": "Sports",
        "date": 2007,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at Summer Olympics Weightlifting, 47 gold medals, 92 total medals",
        "field": "Sports",
        "date": 2012,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at FILA Wrestling World Championships, 64 times winner in three team tournaments",
        "field": "Sports",
        "date": 2009,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Best performance at Summer Olympics Wrestling, 105 gold medals, 185 total",
        "field": "Sports",
        "date": 2012,
        "iso": "RUS"
    },
    {
        "country": "Russia\n  USSR",
        "statistic": "Longest total human spaceflight time by country, over 20,000 person-days",
        "field": "Technology",
        "date": 2010,
        "iso": "RUS"
    },
    {
        "country": "Rwanda",
        "statistic": "Highest proportion of women in government, 56.3%",
        "field": "Politics",
        "date": 2013,
        "iso": "RWA"
    },
    {
        "country": "San Marino",
        "statistic": "Most motor vehicles per capita, 1263 per 1000 population",
        "field": "Transport\n Consumption",
        "date": 2010,
        "iso": "SMR"
    },
    {
        "country": "Saudi Arabia",
        "statistic": "Largest oil exporter, 8,865,000 (bbl/day)[109]",
        "field": "Energy",
        "date": 2012,
        "iso": "SAU"
    },
    {
        "country": "Serbia\n  Serbia and Montenegro\n  Yugoslavia",
        "statistic": "Winner of most Basketball World Championships, 5 times winner (tied with United States)",
        "field": "Sports",
        "date": 2014,
        "iso": "SRB"
    },
    {
        "country": "Serbia\n  Serbia and Montenegro\n  Yugoslavia",
        "statistic": "Best performance at FINA World Water Polo Championship (men), 4 times winner",
        "field": "Sports",
        "date": 2013,
        "iso": "SRB"
    },
    {
        "country": "Sierra Leone",
        "statistic": "Highest industrial production growth rate, 88%",
        "field": "Industry",
        "date": 2013,
        "iso": "SLE"
    },
    {
        "country": "Singapore",
        "statistic": "Lowest fertility rate, 0.8 births per woman",
        "field": "Demographics",
        "date": 2014,
        "iso": "SGP"
    },
    {
        "country": "Singapore",
        "statistic": "Lowest infant mortality rate, 2.31 deaths per 1000 live births",
        "field": "Demographics",
        "date": 2009,
        "iso": "SGP"
    },
    {
        "country": "Singapore",
        "statistic": "Most economic freedom according to Index of Economic Freedom, 89.4 points",
        "field": "Economy\n Politics",
        "date": 2015,
        "iso": "SGP"
    },
    {
        "country": "Singapore",
        "statistic": "Most trade freedom according to Global Enabling Trade Report, 5.9 points",
        "field": "Economy\n Politics",
        "date": 2014,
        "iso": "SGP"
    },
    {
        "country": "Singapore",
        "statistic": "Easiest business doing according to Ease of Doing Business Index",
        "field": "Economy\n Politics",
        "date": 2015,
        "iso": "SGP"
    },
    {
        "country": "Somalia",
        "statistic": "Largest livestock of camels, 7,000,000 heads",
        "field": "Agriculture",
        "date": 2003,
        "iso": "SOM"
    },
    {
        "country": "Somalia",
        "statistic": "Most corrupt country according to Transparency International (tied with North Korea)[42]",
        "field": "Politics",
        "date": 2014,
        "iso": "SOM"
    },
    {
        "country": "Somalia",
        "statistic": "Highest importance of religion, (tied with Bangladesh and Nigeria)",
        "field": "Demographics",
        "date": 2009,
        "iso": "SOM"
    },
    {
        "country": "South Africa",
        "statistic": "Most people living with HIV/AIDS, 6,300,000",
        "field": "Demographics",
        "date": 2013,
        "iso": "ZAF"
    },
    {
        "country": "South Africa",
        "statistic": "Largest chromium producer",
        "field": "Industry",
        "date": 2013,
        "iso": "ZAF"
    },
    {
        "country": "South Africa",
        "statistic": "Largest mohair producer",
        "field": "Agriculture",
        "date": 2013,
        "iso": "ZAF"
    },
    {
        "country": "South Africa",
        "statistic": "Largest platinum producer, 147 tonnes",
        "field": "Industry",
        "date": 2010,
        "iso": "ZAF"
    },
    {
        "country": "South Africa",
        "statistic": "Highest death rate, 17.36 deaths per 1000 persons",
        "field": "Demographics",
        "date": 2013,
        "iso": "ZAF"
    },
    {
        "country": "South Korea",
        "statistic": "Highest percentage of 25-34 year olds having a tertiary education degree at 63.82%",
        "field": "Education",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance in eighth grade math at Trends in International Mathematics and Science Study with a score of 613",
        "field": "Education",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance in fourth grade science at Trends in International Mathematics and Science Study with a score of 587",
        "field": "Education",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest in Bloomberg Innovation Index",
        "field": "Technology",
        "date": 2014,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest Global innovation performance at Innovation Union Scoreboard with a score of 0.740",
        "field": "Technology",
        "date": 2014,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest Global innovation growth at Innovation Union Scoreboard at 6.0%",
        "field": "Technology",
        "date": 2014,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest patent applications per GDP according to World Intellectual Property Indicators",
        "field": "Technology",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest patent applications per million population according to World Intellectual Property Indicators",
        "field": "Technology",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest application design counts per million population according to World Intellectual Property Indicators",
        "field": "Technology",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Most patents in force, 2,962,000",
        "field": "Technology",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Largest shipbuilder, 2,310,000 Gross Tonnage, 41% of world's total",
        "field": "Industry\n Transport",
        "date": 2015,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest in 4G LTE penetration at 62%",
        "field": "Technology",
        "date": 2013,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Fastest Internet connection speed at 25.3 Mbps",
        "field": "Technology",
        "date": 2014,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest in UN e-Government Readiness Index, with a score of 0.9283",
        "field": "Technology",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest in Economist Intelligence Unit's Government Broadband Index with a score of 4.4",
        "field": "Technology",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest in mobile banking usage at 47%",
        "field": "Technology",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Lowest obesity rate in the OECD",
        "field": "Health",
        "date": 2009,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest colorectal cancer 5-year survival rate at 72.8%",
        "field": "Health",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest cervical cancer 5-year survival rate at 76.8%",
        "field": "Health",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest spending on research and development per capita, 4.36% of GDP",
        "field": "Economy",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Lowest in Long-term unemployment rate at 0.01%",
        "field": "Economy",
        "date": 2012,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Highest in average number of movies watched in cinemas at 4.12",
        "field": "Culture",
        "date": 2013,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance at Battle of the Year, 6 wins",
        "field": "Culture",
        "date": 2010,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance at World Short Track Speed Skating Team Championships (women), 12 gold medals, 20 total medals",
        "field": "Sports",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance at World Junior Short Track Speed Skating Championships, 29 gold medals, 66 total medals",
        "field": "Sports",
        "date": 2009,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance at World Taekwondo Championships, 162 gold medals, 222 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "KOR"
    },
    {
        "country": "South Korea",
        "statistic": "Best performance at World Cyber Games",
        "field": "Game",
        "date": 2011,
        "iso": "KOR"
    },
    {
        "country": "South Sudan",
        "statistic": "Youngest country, Established 2011",
        "field": "History",
        "date": 2013,
        "iso": "SSD"
    },
    {
        "country": "South Sudan",
        "statistic": "Lowest literacy rate, 27% of population",
        "field": "Demographics\n Quality of life",
        "date": 2009,
        "iso": "SSD"
    },
    {
        "country": "South Sudan",
        "statistic": "Most unstable country according to Failed States Index, score of 114.5",
        "field": "Politics",
        "date": 2015,
        "iso": "SSD"
    },
    {
        "country": "Spain",
        "statistic": "Largest olive producer, output of 7,820,060 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "ESP"
    },
    {
        "country": "Spain",
        "statistic": "Largest carob producer, output of 40,000 tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "ESP"
    },
    {
        "country": "Spain",
        "statistic": "Best performance at Roller Hockey World Championship (men), 16 gold medals, 36 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "ESP"
    },
    {
        "country": "Sri Lanka",
        "statistic": "Largest Cinnamon Exporter and Producer, 90% of world production",
        "field": "Agriculture",
        "date": 2011,
        "iso": "LKA"
    },
    {
        "country": "Sri Lanka",
        "statistic": "Most successful team in ICC World Twenty20 (Men)",
        "field": "Sports",
        "date": 2014,
        "iso": "LKA"
    },
    {
        "country": "Sudan",
        "statistic": "Lowest level of innovation according to Global Innovation Index, score of 0.4",
        "field": "Technology",
        "date": 2013,
        "iso": "SDN"
    },
    {
        "country": "Suriname",
        "statistic": "Highest percent of forest area, 90.20%",
        "field": "Geography",
        "date": 2011,
        "iso": "SUR"
    },
    {
        "country": "Swaziland",
        "statistic": "Highest HIV/AIDS adult prevalence rate, 26.5 of population",
        "field": "Demographics",
        "date": 2012,
        "iso": "SWZ"
    },
    {
        "country": "Swaziland",
        "statistic": "Lowest overall life expectancy, 31.88 years[110]",
        "field": "Demographics\n Quality of life",
        "date": 2009,
        "iso": "SWZ"
    },
    {
        "country": "Sweden",
        "statistic": "Most equal income distribution according to CIA World Factbook",
        "field": "Demographics\n Economy",
        "date": 2005,
        "iso": "SWE"
    },
    {
        "country": "Sweden",
        "statistic": "Winner of most Bandy World Championships for women, 6 (2004, 2006, 2007, 2008, 2010, 2012)",
        "field": "Sports",
        "date": 2014,
        "iso": "SWE"
    },
    {
        "country": "Sweden",
        "statistic": "Best performance at World Floorball Championship",
        "field": "Sports",
        "date": 2009,
        "iso": "SWE"
    },
    {
        "country": "Switzerland",
        "statistic": "Lowest level of business corruption according to Bribe Payers Index, score of 8.8 (tied with Netherlands)",
        "field": "Economy\n Politics",
        "date": 2011,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Highest economic competitiveness according to Global Competitiveness Report, score of 5.80",
        "field": "Economy\n Politics",
        "date": 2015,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Best environmental performance according to Environmental Performance Index, 87.67",
        "field": "Environment",
        "date": 2014,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Lowest central bank interest rate (tied with Denmark), -0.75%",
        "field": "Finance",
        "date": 2015,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Best performance at UCI Mountain Bike Marathon World Championships, 8 gold medals, 20 total medals",
        "field": "Sports",
        "date": 2015,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Best performance at Sidecarcross World Championship",
        "field": "Sports",
        "date": 2009,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Highest tourist competitiveness according to Travel and Tourism Competitiveness Report, 5.68",
        "field": "Tourism",
        "date": 2009,
        "iso": "CHE"
    },
    {
        "country": "Switzerland",
        "statistic": "Best quality of life according to the Quality-of-life index, 8.22 out of 10[111]",
        "field": "Quality of life",
        "date": 2013,
        "iso": "CHE"
    },
    {
        "country": "Syria",
        "statistic": "Least peaceful nation according to Global Peace Index",
        "field": "Military\n Politics",
        "date": 2014,
        "iso": "SYR"
    },
    {
        "country": "Syria",
        "statistic": "Lowest net migration rate per 1,000 population, -113.51[112]",
        "field": "Demographics",
        "date": 2014,
        "iso": "SYR"
    },
    {
        "country": "Syria",
        "statistic": "Lowest population growth rate, -9.73[113]",
        "field": "Demographics",
        "date": 2013,
        "iso": "SYR"
    },
    {
        "country": "Taiwan",
        "statistic": "Best student performance in mathematics according to Programme for International Student Assessment[114]",
        "field": "Demographics\n Quality of life",
        "date": 2006,
        "iso": "TWN"
    },
    {
        "country": "Timor-Leste",
        "statistic": "Highest tax rate as percentage of GDP, 69.1%",
        "field": "Finance",
        "date": 2015,
        "iso": "TLS"
    },
    {
        "country": "Timor-Leste",
        "statistic": "Least globalized country according to Globalization Index, score of 24.35",
        "field": "Politics",
        "date": 2013,
        "iso": "TLS"
    },
    {
        "country": "Turkey",
        "statistic": "Largest apricot producer, output of 795,768 tonnes [115]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest cherry and sour cherry producer, output of 480,748 tonnes [115]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest sour cherry producer, output of 187,941 tonnes [115]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest fig producer, output of 274,535 tonnes [115]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest hazelnut producer, output of 660,000 tonnes [115]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest quince producer, output of 135,406 tonnes [115]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest wheat flour exporter, output of 2.062,730 tons [116]",
        "field": "Agriculture",
        "date": 2011,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Highest consumption of tea per capita, 6.87 kg (242 oz) [117]",
        "field": "Consumption",
        "date": 2014,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Largest boron reserves and producer, output of 2500 tonnes.[118]",
        "field": "Industry",
        "date": 2012,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Most generous country by GNI 0.21%, Total aid: US$1.6 billion [119]",
        "field": "Economy",
        "date": 2013,
        "iso": "TUR"
    },
    {
        "country": "Turkey",
        "statistic": "Biggest refugee hosting country with 2.1 million Syrian and Iraqi refugees [120][121]",
        "field": "Demographics",
        "date": 2015,
        "iso": "TUR"
    },
    {
        "country": "Turkmenistan",
        "statistic": "Highest GDP (real) annual growth rate, 10.30% (CIA World Factbook est.)[91]",
        "field": "Economy",
        "date": 2014,
        "iso": "TKM"
    },
    {
        "country": "Tuvalu",
        "statistic": "Smallest number of immigrants, 148",
        "field": "Demographics",
        "date": 2013,
        "iso": "TUV"
    },
    {
        "country": "Tuvalu",
        "statistic": "Lowest GDP (nominal), US$38 million",
        "field": "Economy",
        "date": 2014,
        "iso": "TUV"
    },
    {
        "country": "Tuvalu",
        "statistic": "Lowest GDP (PPP), US$4 million",
        "field": "Economy",
        "date": 2014,
        "iso": "TUV"
    },
    {
        "country": "Tuvalu",
        "statistic": "Largest percentage of permanent crops, 66.67%",
        "field": "Agriculture\n Geography",
        "date": 2005,
        "iso": "TUV"
    },
    {
        "country": "Ukraine",
        "statistic": "Largest sunflower seed producer, output of 8.39 million metric tons",
        "field": "Agriculture",
        "date": 2012,
        "iso": "UKR"
    },
    {
        "country": "Ukraine",
        "statistic": "Highest central bank interest rate, 30.00%",
        "field": "Finance",
        "date": 2015,
        "iso": "UKR"
    },
    {
        "country": "United Arab Emirates",
        "statistic": "Lowest death rate, 0.9 deaths per 1000 persons",
        "field": "Demographics",
        "date": 2011,
        "iso": "ARE"
    },
    {
        "country": "United Arab Emirates",
        "statistic": "Highest prevalence of males in population, 2.19 males per female",
        "field": "Demographics",
        "date": 2009,
        "iso": "ARE"
    },
    {
        "country": "United Arab Emirates",
        "statistic": "Highest ecological footprint",
        "field": "Environment",
        "date": 2009,
        "iso": "ARE"
    },
    {
        "country": "United Arab Emirates",
        "statistic": "Lowest tax rate as percentage of GDP, 1.4%",
        "field": "Finance",
        "date": 2015,
        "iso": "ARE"
    },
    {
        "country": "United Arab Emirates",
        "statistic": "Highest military expenditure per capita, $2653 per person per year",
        "field": "Military",
        "date": 2009,
        "iso": "ARE"
    },
    {
        "country": "United Arab Emirates",
        "statistic": "Tallest building, Burj Khalifa, 2717 ft",
        "field": "Structures",
        "date": 2014,
        "iso": "ARE"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most overseas territories/dependencies, the UK has 14 overseas territories and 3 crown dependencies.",
        "field": "Politics",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most Open and Transparent Government, According to The World Wide Web Foundation's Open Data Barometer.[122]",
        "field": "Politics",
        "date": 2015,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "City with highest non-food retail sales, London with a total spend of around £64.2 billion",
        "field": "Finance",
        "date": 2010,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Busiest airport system by passenger traffic, London sees a total 146,685,710 passengers annually, through Heathrow, Gatwick, Stansted, Luton, City and Southend airports.[123]",
        "field": "Transport",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Busiest single runway, Gatwick Airport (LGW)",
        "field": "Transport",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Busiest train station, Clapham Junction railway station, in London, by station by daily rail traffic (one train every 13 seconds at peak times; one train every 30 seconds at off-peak times).",
        "field": "Transport",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Largest enclosed rain-forest, the Eden Project near St Austell",
        "field": "Environment",
        "date": 2001,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Longest guided busway by length in miles, Cambridgeshire Guided Busway - 16 miles",
        "field": "Transport",
        "date": 2011,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "The largest television broadcaster, BBC",
        "field": "Television",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most elements of the periodic table discovered, 23 of the 118 known elements were discovered by British scientists.[124]",
        "field": "Science",
        "date": 0,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Largest off-shore wind farm, London Array in the United Kingdom, producing 630 MW.",
        "field": "Energy Industry",
        "date": 2015,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Highest producing off-shore wind farm, the biggest producer of wind energy is the Greater Gabbard wind farm. In 2012 it produced 1,195 GigaWatt-hours (GWh).",
        "field": "Energy Industry",
        "date": 2012,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Deepest off-shore wind farm, The Beatrice Wind Farm is the deepest fixed-foundation wind farm at 45-metre water depth.",
        "field": "Energy Industry",
        "date": 2007,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Largest exporter of off-shore generated wind power, the UKs wind farms combine to produce the greatest wind farm exports to foreign countries",
        "field": "Energy Industry",
        "date": 2012,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Largest producer of alcoholic spirits, Diageo Plc. of London.",
        "field": "Industry",
        "date": 2010,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most valuable football club, Manchester United",
        "field": "Sports",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most number of times the Olympic Games have been held in one city, London held Olympics 3 times: 1908, 1948, 2012",
        "field": "Sports",
        "date": 2012,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Best performance at Eventing World Championship (equestrian), 9 gold medals, 21 total medals",
        "field": "Sports",
        "date": 2010,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Best government website, GOV.uk won the Designs of the Year Award 2013",
        "field": "Politics",
        "date": 2013,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most visited city, London with 15.6 million visitors.",
        "field": "Tourism",
        "date": 2006,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most Formula One Grand Prix wins, 243 by 19 drivers",
        "field": "Sports",
        "date": 2015,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most Formula One Grand Prix wins (constructors), 520 by 16 constructors",
        "field": "Sports",
        "date": 2009,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Best performance at equestrian Mounted games, 22 wins (including separate England and Wales wins)",
        "field": "Sports",
        "date": 2009,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Best performance at ITU Triathlon World Championships (men), 10 gold medals, 18 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Most books published per year per capita[125]",
        "field": "Culture",
        "date": 2006,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "The highest grossing film series (inflation adjusted), the James Bond film series",
        "field": "Culture",
        "date": 2014,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Oldest metro system, the Tube in London, opened in 1863[126]",
        "field": "Transport",
        "date": 1863,
        "iso": "GBR"
    },
    {
        "country": "United Kingdom",
        "statistic": "Oldest currency, sterling, first used in 775AD[127]",
        "field": "Economics",
        "date": "775AD",
        "iso": "GBR"
    },
    {
        "country": "United States",
        "statistic": "Largest producer of berries output of 2,074,000[64]",
        "field": "Agriculture",
        "date": 2012,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest corn (maize) producer, output of 353,699,441 tons",
        "field": "Agriculture",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest sorghum producer, output of 12 million tons",
        "field": "Agriculture",
        "date": 2008,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest grapefruit and pummelo producer, output of 1,580,000 tons",
        "field": "Agriculture",
        "date": 2007,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest strawberry producer, output of 1,312,960 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest almond producer, output of 1,410,000 tons",
        "field": "Agriculture",
        "date": 2010,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest beef producer, output of 11,789,000 ton",
        "field": "Agriculture",
        "date": 2010,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest chicken (broiler) producer, output of 15,980,000 ton",
        "field": "Agriculture",
        "date": 2009,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest turkey meat producer, output of 5,567,000 ton",
        "field": "Agriculture",
        "date": 2009,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest livestock of horses, 9,500,000 heads",
        "field": "Agriculture",
        "date": 2008,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest area of cultivated land, 1,669,302 km²",
        "field": "Agriculture\n Geography",
        "date": 2005,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest area of arable land, 1,650,062 km²",
        "field": "Agriculture\n Geography",
        "date": 2005,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest electricity importer, 51,400 million kWh",
        "field": "Consumption\n Energy",
        "date": 2007,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest natural gas consumer, 689,900,000,000 cu m",
        "field": "Consumption\n Energy",
        "date": 2011,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest oil consumer, 18,840,000 bbl/d (2,995,000 m3/d)[128]",
        "field": "Consumption\n Energy",
        "date": 2011,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest oil importer, 7,713,000 bbl/day[129]",
        "field": "Consumption\n Energy",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest consumer market, Annual market size of approximately US$10 trillion",
        "field": "Consumption\n Household",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "The highest grossing film series, the Marvel Cinematic Universe film series",
        "field": "Culture",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Highest incarceration rate, 760 prisoners per 100000 people, totaling 2,310,984 prisoners",
        "field": "Demographics",
        "date": 2008,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most privately owned firearms per capita, 88.8 per 100 population[130]",
        "field": "Demographics",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most privately owned firearms in total, 270 million[130]",
        "field": "Demographics",
        "date": 2007,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest number of immigrants, 45,785,090",
        "field": "Demographics",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most billionaires, 1,764",
        "field": "Demographics\n Economy",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "New York City is city with most billionaires, 103 billionaires",
        "field": "Demographics Economy",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Highest GDP (nominal), 17,418,925",
        "field": "Economy",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Highest service sector output",
        "field": "Economy",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest nuclear power producer, 101,119 MWh",
        "field": "Energy",
        "date": 2008,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most nuclear reactors for electricity generation, 100",
        "field": "Energy",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest proven coal reserves, 237,295 million tons",
        "field": "Energy",
        "date": 2008,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest natural gas producer, 681,400,000,000 m³",
        "field": "Energy\n Industry",
        "date": 2012,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest external debt, $18,540,448,667,000",
        "field": "Finance",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest government budget revenues, $3,001,721,000,000",
        "field": "Finance",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest government budget expenditures, $3,650,526,000,000",
        "field": "Finance",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Highest government budget deficit, $-648,805,000,000",
        "field": "Finance",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest official gold reserves, 8,133.5 tons",
        "field": "Finance",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest stock of foreign direct investment abroad, $4,854,000,000,000.00",
        "field": "Finance",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest stock of received foreign direct investment, $2,815,000,000,000",
        "field": "Finance",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest importer, $2,380,000,000,000",
        "field": "Finance",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Worst current account balance, -$784,775,000,000",
        "field": "Finance",
        "date": 2011,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest Exclusive Economic Zone, 11,351,000 km2",
        "field": "Geography",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest bentonite producer, 4,620,000 tons",
        "field": "Industry",
        "date": 2006,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest cheese producer, 5,162,730 tons",
        "field": "Agriculture",
        "date": 2011,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest cellulose producer, 47,047 tons",
        "field": "Industry",
        "date": 2009,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest arms exporter, $10,194,000,000",
        "field": "Industry\n Military",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest military budget, $581,000,000,000",
        "field": "Military",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most aircraft carriers in operation, 10",
        "field": "Military",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most cruisers in operation, 22",
        "field": "Military",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most destroyers in operation, 62",
        "field": "Military",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most nuclear submarines in operation, 71",
        "field": "Military",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest airforce, 4000 units",
        "field": "Military",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most science papers output, 2,798,448 journal papers published between 1998-2008[131]",
        "field": "Science",
        "date": 2008,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most cited country, 35,368,367 citations between 1993-2003[132]",
        "field": "Science",
        "date": 2004,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most Olympic Games hosted, 8 (1904 Summer Olympics, 1932 Summer Olympics, 1984 Summer Olympics, 1996 Summer Olympics, 1932 Winter Olympics, 1960 Winter Olympics, 1980 Winter Olympics, 2002 Winter Olympics)",
        "field": "Sports",
        "date": 2012,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most Olympic medals, 1,072 gold, 2,680 total",
        "field": "Sports",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most Summer Olympic medals, 976 gold, 2,399 total",
        "field": "Sports",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at American Football World Cup, 3 times winner (2007, 2011, 2015)",
        "field": "Sports",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Winner of most Basketball World Championships for Women, 9 (1953, 1957, 1979, 1986, 1990, 1998, 2002, 2010, 2014)[133]",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at World Aquatics Championships, 214 gold medals, 499 total medals",
        "field": "Sports",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at World Championships in Athletics, 138 gold medals, 300 total medals",
        "field": "Sports",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at World Backgammon Championship, 19 wins",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Winner of most Basketball World Championships, 5 times winner (tied with Serbia/Yugoslavia)",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at FIFA Women's World Cups, 3 times winner (1991, 1999), (2015, 1 time runner-up (2011)",
        "field": "Sports",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at WTBA World Tenpin Bowling Championships, (women) 23 gold medals, 67 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at UCI BMX World Championships, 24 gold medals, 70 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at Golf World Cup (men), 24 wins",
        "field": "Sports",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at World Lacrosse Championship (men), 9 times winner",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at Women's Lacrosse World Cup, 7 times winner",
        "field": "Sports",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at Racquetball World Championships",
        "field": "Sports",
        "date": 2009,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at ISF Women's World Championship (softball), 9 gold medals, 13 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at tennis Davis Cup (men), 32 team wins",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at tennis Fed Cup (women), 17 team wins",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at tennis Hopman Cup (mixed pairs), 6 team wins",
        "field": "Sports",
        "date": 2015,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at FINA World Water Polo Championship (women), 3 times winner",
        "field": "Sports",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Best performance at Basketball World Championships for Women, 9 gold medals, 12 total medals",
        "field": "Sports",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Highest International tourism receipts, $177.2 billion",
        "field": "Tourism",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Longest total length of railways, 224,792 km[134]",
        "field": "Transport",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Longest total length of roadways, 6,586,610 km[135]",
        "field": "Transport",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most airports, 15,095[136]",
        "field": "Transport",
        "date": 2005,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most heliports, 2,575",
        "field": "Transport",
        "date": 2010,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Largest total length of pipelines, 2,225,032 km",
        "field": "Transport",
        "date": 2013,
        "iso": "USA"
    },
    {
        "country": "United States",
        "statistic": "Most Soft power of any nation",
        "field": "Politics",
        "date": 2014,
        "iso": "USA"
    },
    {
        "country": "Uruguay",
        "statistic": "Most southernmost northernmost point on land, 30°05'S",
        "field": "Geography",
        "date": 2009,
        "iso": "URY"
    },
    {
        "country": "Uzbekistan",
        "statistic": "Largest double landlocked country, 447,400 km² (172,742 sq mi)",
        "field": "Geography",
        "date": 0,
        "iso": "UZB"
    },
    {
        "country": "Vatican City",
        "statistic": "Smallest population, 839",
        "field": "Demographics",
        "date": 2012,
        "iso": "VAT"
    },
    {
        "country": "Vatican City",
        "statistic": "Largest percentage of immigrant population, 100%",
        "field": "Demographics",
        "date": 2015,
        "iso": "VAT"
    },
    {
        "country": "Vatican City",
        "statistic": "Smallest total area, 0,44 km²",
        "field": "Geography",
        "date": 2015,
        "iso": "VAT"
    },
    {
        "country": "Vatican City",
        "statistic": "Smallest landlocked country, 0,44 km²",
        "field": "Geography",
        "date": 2015,
        "iso": "VAT"
    },
    {
        "country": "Venezuela",
        "statistic": "Largest proven oil reserves, 297,740,000,000 bbl (4.7337×1010 m3)[137]",
        "field": "Energy",
        "date": 2014,
        "iso": "VEN"
    },
    {
        "country": "Venezuela",
        "statistic": "Best performance at Big Four Beauty Pageants (Miss Universe, Miss World, Miss International, Miss Earth), 21 times winner",
        "field": "Culture",
        "date": 2014,
        "iso": "VEN"
    },
    {
        "country": "Venezuela",
        "statistic": "Lowest level of property rights according to International Property Rights Index, score of 3.2[48]",
        "field": "Politics",
        "date": 2014,
        "iso": "VEN"
    },
    {
        "country": "Venezuela",
        "statistic": "Highest annual inflation rate, 96.3%",
        "field": "Finance",
        "date": 2015,
        "iso": "VEN"
    },
    {
        "country": "Vietnam",
        "statistic": "Smallest percentage of immigrant population, 0.0249%",
        "field": "Demographics",
        "date": 2005,
        "iso": "VNM"
    },
    {
        "country": "Vietnam",
        "statistic": "Largest reserve force, 3,000,000",
        "field": "Military",
        "date": 2012,
        "iso": "VNM"
    },
    {
        "country": "Zimbabwe",
        "statistic": "Highest unemployment rate, 70% of population",
        "field": "Demographics\n Economy",
        "date": 2011,
        "iso": "ZWE"
    },
    {
        "country": "Zimbabwe",
        "statistic": "Oldest world leader currently in power, Robert Mugabe, at age 91",
        "field": "Politics",
        "date": 2015,
        "iso": "ZWE"
    }
];
