const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const router = require('express').Router()


router.route('/').post((req, res) => {
    const creds = require('../credentials.json')

    async function accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await promisify(doc.useServiceAccountAuth)(creds)
        const info = await promisify(doc.getInfo)()
        const sheet = info.worksheets[0]

        const youthid = req.body.youthid
        const fullname = req.body.fullname
        const institution = req.body.institution

        const newVolunteer = {
            youthid,
            fullname,
            institution
        }

        promisify(sheet.addRow)(newVolunteer)
            .then(res.json('New Volunteer Added'))
            .catch(err => console.log(err))
    }

    accessSpreadsheet()
})

module.exports = router