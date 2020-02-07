getArray = [
    ["Thomas", "Driscoll", "Computer Engineering", "C++"],
    ["Brian", "Wilens", "Physics", "HTML"]
]

def getAll():
    return getArray

def getOne(firstname, lastname):
    firstFlag = False
    lastFlag = False
    for i in getArray:
        if(i[0] == firstname):
            firstFlag = True
        if(i[1] == lastname):
            lastFlag = True
        if(firstFlag and lastFlag):
            return i

def getMajor(major):
    goodMajor = []
    for i in getArray:
        if(i[2] == major):
            goodMajor.append(i) 
    return goodMajor

def getLang(lang):
    return goodMajor(lang)

def add(firstname, lastname, major, lang):
    getArray.append([firstname, lastname, major, lang])
    print(getArray)

def updateMajor(firstname, lastname, major):
    for i in getArray:
        if(i[0] == firstname and i[1] == lastname):
            i[2] = major
    return 
