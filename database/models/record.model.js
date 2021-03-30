module.exports = (Sequelize, connector)=>{
    const Record = connector.define('record',{
        исполнитель: Sequelize.STRING,
        песня: Sequelize.STRING,
        жанр: Sequelize.STRING,
        год: Sequelize.INTEGER
    })
    return Record
}