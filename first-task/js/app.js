const data = require("./data")
const yargs = require("yargs")
yargs.command({
    command : "add",
    descripe : "to add an item",
    builder : {
        fname : {
            descripe : "this is the first name",
            demandOption : true,
            type: "string"
        },
        lname : {
            descripe : "this is the last name",
            demandOption : true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
})
yargs.command({
    command : "read",
    descripe: "to read data",
    builder : {
        id : {
            descripe: "this is id desc in read command",
            demandOption : true,
            type: "string"
        }
    },
    handler: (x) => { 
        data.readData(x.id)
    }
})
yargs.command({
    command:  "delete",
    descripe: "to delete an item",
    handler: (x) => { 
        data.deleteData(x.id)
    }
})
yargs.command({
    command:  "list",
    descripe: "to list data",
    handler: () => { 
        data.listData()
    }
})
yargs.command({
    command:  "*",
    descripe: "command not found",
    handler: () => { 
        console.log("ERROR try another command
        ")
    }
})

yargs.parse()