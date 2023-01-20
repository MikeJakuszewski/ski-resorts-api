// const { request, response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const skiResorts ={
    'blue mountain':{
        'location': 'Collingwood, Ontario',
        'top elevation': '450 m or 1,480ft',
        'skiable area': '364 acres',
        'number of runs': '42',
        'lift capacity': '26,750 per hour',
        'longest run': '1.6kms'
    },
    'banff sunshine':{
        'location': 'Banff National Park, Alberta, Canada',
        'top elevation': '2,730m m or 8,957ft',
        'skiable area': '13.6 km2 (3,360.6 acres)',
        'number of runs': '120',
        'lift capacity': '20,000 per hour',
        'longest run': '8kms or 5 miles'
    },
    'lake louise ski resort':{
        'location': 'Lake Louise, Alberta, Canada',
        'top elevation': '2,637m or 8,650ft',
        'skiable area': '17 km2 (6.6 sq mi)',
        'number of runs': '145',
        'lift capacity': '14,000 per hour',
        'longest run': '8kms or 5 miles',
        'run breakdown':{
            'green':'17',
            'blue': '25',
            'black': '54',
            'double black': '43'
        }
    },
    'unknown':{
       ' unknown': 'Please enter a known ski resort'
    }
}


app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (request,response) =>{
    let id = request.params.id.toLocaleLowerCase()
    if(skiResorts[id]){
        response.json(skiResorts[id])
    }else{
        response.json(skiResorts['unknown'])
    }
    response.json(skiResorts)
})

app.get('/api', (request,response) =>{
    response.json(skiResorts)
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Your server is running on port ${process.env.PORT || PORT}`)
})