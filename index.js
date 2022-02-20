const config=require('./config/config')
const express=require('express')
const connectDB=require('./config/db')
const apiRoute= require('./apiRoute')
connectDB()
const app= express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/contact', apiRoute)


app.listen(config.port,()=>{
    console.log(`Server running in ${config.nodeEnv} on port ${config.port} on db- ${config.mongoUrl}`);
})
// {
//  "_id": "62125082061ca725f1b4521e"
// 	"first_name":"victor",
// 	"last_name":"ogbonna",
// 	"email":"victorgbonna@gmail.com",
// 	"phone":"+234 8072897950",
// 	"job_title":"Software Engineer",
// 	"company_name":"Self Employed",
// 	"birthday_month":9,
// 	"birthday_year":2010,
// 	"country":"nigeria"
// }
// {   "first_name": "victor",
//     "last_name": "ogbonna",
//     "email": "victorgbonna8@gmail.com",
//     "phone": "+234 8102603301",
//     "job_title": "Software Engineer",
//     "company_name": "Self Employed",
//     "birthday_month": 9,
//     "birthday_year": 2010,
//     "country": "nigeria",
//     "_id": "621245e29938c398361cfa2b",
//     ,
// }