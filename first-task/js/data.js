const fs = require("fs")
const addPerson = (id, fname, lname, age, city) => {
    const allData = loadData()
    const duplicatedData = allData.filter((element) => {
        return element.id === id
    });
    if (duplicatedData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveAllData(allData)
    }
    else {
        console.log("ERROR DUPLICATED ID")
    }
}
const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}
const saveAllData = (allData) => {
    const AllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json", AllDataJson)
}
const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj) => {
        return obj.id != id
    })
    saveAllData(dataToKeep)
    console.log("you are already deleted an item")
}
const readData = (id) => {
    const allData = loadData()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })
    if(itemNeeded){
        console.log(itemNeeded.fname)
    }else{
        console.log("id not found")
    }
}
const listData = () => {
     const allData = loadData()
     allData.forEach((element) => {
        console.log(element.fname , element.age , element.city)
     });
}

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}