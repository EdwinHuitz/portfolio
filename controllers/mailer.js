const mailer=require('sendmail')

async function sendMail(req,res){
   let r=req.params.mail
   const sendIt=mailer()
   let arr=r.split(',')
   try{
      sendIt({
      from:'contact@edwinhuitz.xyz',
      to:'edwinhuitz@gmail.com',
      subject:`${arr[0]}:${arr[2]}`,
      html:`${arr[1]}<br/>${arr[3]}`
      })
      res.status(200).send('done!')
   }
   catch(err){res.send(err)}
}
module.exports=sendMail