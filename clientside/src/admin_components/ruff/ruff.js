const [d1,sd1]=useState([])
const [d2,sd2]=useState([])
const [d3,sd3]=useState([])
const [d4,sd4]=useState([])
const [d5,sd5]=useState([])
const Db=()=>
{
    sd1("db")
}
const Um=()=>
{
    sd2("um")
}
const Aum=()=>
{
    sd3('aum')
}
const Pm=()=>
{
    sd4('pm')
}
const Urm=()=>
{
    sd5('urm')
}


const [uc,suc]=useState(0);
const [pc,spc]=useState(0);
const [uib,ssib]=useState(0);
const [eib,seib]=useState(0);
const [ru,sru]=useState(0);
const [tv,stv]=useState(0);
const [ts,sts]=useState(0);
const [pt,spt]=useState(0);


 {/* <div style={{display:'none'}}>{y=(parseInt(cor)-parseInt(usd))}</div> */}
                                    {/* <label for='eusd'><b>The total value of USD in bank is : {usd}</b></label><br/>
                                    <label for="eusd"><b>Pending eUSD:{pendg}</b></label><br/>
                                    <label for='eusd'><b>the number of eUSD's created till now: {unit}</b></label><br/>
                                    <label for='eusd'><b>Available USD in Bank: {avil}</b></label><br/><br/>
                                    <label for='eusd'><b>eUSD possible to be created:{limit}</b></label><br/>
                                    <button id={1} onClick={Limitdis}><b>Limit</b></button><div>{limit}</div> */}


{/* Show value in Land */}
                            {/* <div className="editdis" style={{display:'none'}} id="svlb">
                            <div style={{textAlign:'center',marginTop:'25%'}}>
                                <div style={{display:'none'}}>{y=(parseInt(cor)-parseInt(usd))}</div>
                                <label>Current 1 Land Unit value in USD:{val}</label><br/>
                                    <label for='eusd'><b>The total value of eUSD in bank is : {usd}</b></label><br/>
                                    <label for="eusd"><b>Pending Land units :{pendg}</b></label><br/>
                                    <label for="eusd"><b>Pending Land <i>(in eUSD)</i>:{pendg*val}</b></label><br/>
                                    <label for='eusd'><b>The number of Land created till now: {unit}</b></label><br/>
                                    <label for='eusd'><b>Available USD in Bank: {avil}</b></label><br/><br/>
                                    <label for='eusd'><b>The number of Land's created till now: {unit*val}</b></label><br/>
                                    <label for='eusd'><b>Land Units possible to be created:{limit}</b></label>
                                    <button id={1} onClick={Limitdis}><b>Limit</b></button><div>{limit}</div>
                                </div>
                            </div> */}

                             {/* <div>
                    <Link  className="drop">
                        <img src={"list.svg"} width={'35px'} alt="list" />
                    </Link>
                    <NavLink to='/adminpage' activeClassName='active'  className="drop drop1">
                    <img src={'house.svg'} width={'33px'}  alt="home"></img>
                    </NavLink>
                        </div> */}

                        app.listen(3001, () => {
                            console.log('Server is running on port 3001');
                          });


app.get('/saveadmincheck/:gmail',async(req,res)=>//mail check
{
    const details=await db.collection('saved_adminlogin').findOne({Gmail:req.params.gmail});
    res.json(details);
})
app.get('/login/:gmail/:password',async(req,res)=>//login
{
    const details=await db.collection('User_Data').findOne({Gmail:req.params.gmail,Password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>//forget
{
    const details=await db.collection('User_Data').findOneAndUpdate({Gmail:req.params.gmail},{$set:{Password:req.params.password}})
    res.json(details);
})


axios.get("https://landzone-server.onrender.com/approvedlist")
.then((result)=>
{
    sapvd(result.data);
})

// Approved list from approve
app.post('/approvelist/:name/:gmail/:phonenum/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('Approve_List').insertOne({Name:req.params.name,Gmail:req.params.gmail,Phone_Number:req.params.phonenum,Password:req.params.password,Cpassword:req.params.cpassword})
    res.json(details);
})
app.get('/approvedlist',async(req,res)=>{
    const details=await db.collection('Approve_List').find().toArray()
    res.json(details);
})
app.post('/delapprovelist/:gmail',async(req,res)=>
{
    const details=await db.collection('userlogin').deleteOne({Gmail:req.params.gmail})
    res.json(details);
})
app.post('/disapprove/:gmail',async(req,res)=>
{
    const details=await db.collection('Approve_List').deleteOne({Gmail:req.params.gmail})
    res.json(details);
})

// Approve list check email id

app.post('/updatenames/:name/:gmail/:phonenum',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOneAndUpdate({Gmail:req.params.gmail,Phone_Number:req.params.phonenum},{$set:{Name:req.params.name}})
    res.json(details);
})

// Update and Disable and Enable user
app.get('/disableshow',async(req,res)=>
{
    const details=await db.collection('Approve_List').find().toArray();
    res.json(details);
})
// Edit user data
app.post('/deledit/:id',async(req,res)=>
{
    const details=await db.collection('Approve_List').deleteOne({Name:req.params.id})
    res.json(details);
})

axios.get("https://landzone-server.onrender.com/disableshow")
.then((result2) => {
    scrt(result2.data)
    localStorage.usercount=(result2.data).length;
})
axios.get("https://landzone-server.onrender.com/pymtretrive")
.then((result1)=>
{
    // spymt(result1.data);
})

await axios.post("https://landzone-server.onrender.com/sviewpp/"+vpp.Gmail+"/"+vpp.Units+"/"+vpp.In)
const viewpp1=await axios.post("https://landzone-server.onrender.com/delviewpp/"+vpp.Units)
{
    viewpp1?nj:alert("Try again");
}  

axios.post("https://landzone-server.onrender.com/showvalue/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+avil+"/"+limit+"/"+totalland+"/"+landpend+"/"+landunit+"/"+landlimit)?
alert("Sucessfully saved"):alert("Try again");

app.post('/delecurr',async(req,res)=>
{
    const details=await db.collection('create_currency').deleteMany()
   res.json(details);
})

app.post('/enableadmin/:name/:gmail/:password/:cpassword/:phonenumber',async(req,res)=>
{
   try
   {
    const details=await db.collection("adminlogin").insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})&&
    db.collection("saved_adminlogin").insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})
    res.json(details);
   }
   catch(e)
   {
    console.log(e);
   }
})

{
    check.map((x)=>
    {
        adminlist.map((y)=>
        {
            if(x.Gmail===y.Gmail)
            {
                try
                {
                    document.getElementById(x.Gmail).style.display="block";
                    document.getElementById(x.Gmail+x.Name).style.display="none";
                }
                catch(e)
                {
                    console.log(e);
                }
            }
        })
    })
} 

const res=await axios.get("https://landzone-server.onrender.com/check/"+approve.Gmail)
{
    if(res.data.__v==2)
    {
        alert("Admin Already Exist")
    }
    else
    {
       
    }
}

//main admin
const responce=await axios.get("https://landzone-server.onrender.com/levelsdata")
if(responce.data)
{
    try
    {
        document.getElementById(responce.data.Gmail+1).innerHTML="Selected";
    }
    catch
    {
        alert("Refresh Page");
    }
}

const responce1=await axios.get("https://landzone-server.onrender.com/mainadmin1/"+gmail)
if(responce1.data)
{
    localStorage.mainadmin=responce1.data.Gmail;
}

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Order=()=>
{
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}


