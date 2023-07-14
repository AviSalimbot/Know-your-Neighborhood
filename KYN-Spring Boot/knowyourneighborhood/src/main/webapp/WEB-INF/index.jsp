<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>

<!--  Enable Bootstrap -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet">
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
	rel="stylesheet">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>

<body class="">
	<div className="align-items-center position-relative" style={{ height: "100vh", overflow: "hidden" }}>
            <img className="position-absolute" style={{ minWidth: "100%" }} src="images/neighborhood.jpg" alt="neighborhood" />
            <h1 className="text-white text-center ps-5 pt-5 pb-0 mb-0" style={{ fontSize: "3em", fontWeight: 700, position: "relative", top: "50px" }}>LOGIN</h1>
                    
                <div className='container mt-3 border p-5 pt-0 rounded' style={{ width: '30%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>                        
                        
                    <div class="container authenticated" style="display: none">
                        Logged in as: <span id="user"></span>
                    </div>
                    
					<div class="container unauthenticated mb-3">
                         <div className='row justify-content-evenly mt-5'>                         
                            <hr className="col-4 py-2 mb-0"></hr>
                            <p type="button" className="col-4 py-2 mb-0 text-center" style={{ position: "relative", top: "-20px" }}>Login with:</p>
                            <hr className="col-4 py-2 mb-0"></hr>
                        </div>

                        <div className='row justify-content-evenly'>                         
                            <a href="/login">Click here
                            	<button type="button" class="btn btn-outline-dark col-5 border py-2 rounded"><FontAwesomeIcon icon={faFacebookF} /> Facebook</button>
                            </a>
                            <button type="button" class="btn btn-outline-dark col-5 border py-2 rounded"><FontAwesomeIcon icon={faGoogle} /> Google</button>
                        </div>

                        <div className='row justify-content-evenly mt-5'>                         
                            <hr className="col-4 py-2 mb-0"></hr>
                            <p type="button" className="col-4 py-2 mb-0 text-center" style={{ position: "relative", top: "-20px" }}>Login with email:</p>
                            <hr className="col-4 py-2 mb-0"></hr>
                        </div>
                        
                        <form className='m-2 d-grid'>

                            <div className='form-group mb-3'>
                                <label htmlFor='email'>Email Address</label>
                                <input 
                                type='email' 
                                className='form-control'
                                id='email'
                                value={this.state.email}
                                onChange={this.emailChange}
                                />
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input 
                                type='password' 
                                className='form-control'
                                id='password'
                                value={this.state.password}
                                onChange={this.passwordChange}
                                />
                            </div>

                            <button type='submit' className='btn btn-outline-dark px-5 mt-3'>Login</button>

                        </form>
                        
                	</div>
                </div>
            </div>
</body>
	<script type="text/javascript">
		    $.get("/user", function(data) {
		        $("#user").html(data.userAuthentication.details.name);
		        $(".unauthenticated").hide();
		        $(".authenticated").show();
		    });
	</script>
</html>