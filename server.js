const nodemailer = require("nodemailer")
const ejs = require("ejs")
let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR__EMAIL",
    pass: "YOUR__PASSWORD",
  },
})

const user = {
  name: "Tushar",
  img:
    "https://images.unsplash.com/photo-1588582199583-5ed8ff9d44a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  url: "https://google.com",
}
ejs.renderFile(__dirname + "/test.ejs", { user: user }, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    let mailDetails = {
      from: "xyz@gmail.com",
      to: "abc@gmail.com",
      subject: "Sign in",
      html: data,
      attachments: [
        {
          filename: "smile.png",
          path: __dirname + "/smile.png",
          cid: "uniq-mailtrap.png",
        },
      ],
    }

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs", err)
      } else {
        console.log("Email Send Successfully", data)
      }
    })
  }
})
