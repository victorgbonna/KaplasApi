// get jwt token without all test
// get contact testing
// add contact testing on failed email match, unique email match, failed required field
// bulk contact testing
// ..

const chai= require('chai')
const chaiHttp= require('chai-http')
const app=require('./index')


chai.use(chaiHttp)
chai.should()


describe('Fail on invalid data', ()=>{
    const used_email='victorgbonna@gmail.com'
    const used_phone='+234 8072897950'
    const [first_name, last_name,job_title]=['victor', 'ogbonna', 'Software Engineer']
    const [inv_birthday_year, inv_birthday_month,company_name]=[22, 1534, 'paystack']
    it('should return validation errors', done =>{
        const agent= chai.request.agent(app)
        agent
            .post('api/contact/add/')
            .type('form')
            .send({
                email:used_email, phone:used_phone,
                first_name, last_name,job_title,
                birthday_year:inv_birthday_year,
                birthday_month:inv_birthday_month,
                company_name
            })
            .end((err, res)=>{
                if (err) return done(err)
                res.text.should. contain('Missing credentials')
                done()
            })
    })
})

describe('Make sure adding contact is successful with valid data', ()=>{
    const email=`victor${new Date().getTime()}@example.com`
    const [first_name, last_name, country,job_title]=['victor', 'ogbonna', 'nigeria', 'Software Engineer']
    const [birthday_year, birthday_month,company_name]=[11, 2000, 'paystack']
    let phone=''
    for (let index = 0; index < 12; index++) {
        phone+=Math.floor(Math.random()*10)        
    }
    it('should return success', done =>{
        const agent= chai.request.agent(app)
        agent
            .post('api/contact/add/')
            .type('form')
            .send({
                first_name, last_name,
                phone, email,
                country, job_title,
                birthday_year,
                birthday_month, company_name
            })
            .end((err, res)=>{
                if (err) return done(err)
                res.text.should.contain('Contact created successfully')
                res.should.have.status(200)
                done()
            })
    })
})
