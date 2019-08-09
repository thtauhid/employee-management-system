const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const viewExistingVolunteers = require('./routes/viewExistingVolunteers')
const addNewVolunteer = require('./routes/addNewVolunteer')
const viewVolunteerProfile = require('./routes/viewVolunteerProfile')

app.use('/view/volunteer/all', viewExistingVolunteers)
app.use('/add/volunteer', addNewVolunteer)
app.use('/view/volunteer', viewVolunteerProfile)


app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})