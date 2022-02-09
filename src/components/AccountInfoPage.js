function AccountInfoPage() {

    const dummyCreds = {
        firstName: 'koby',
        lastName: 'conrad',
        emailAddress: 'koby@gmail.com',
        phoneNumber: '2086058866',
        username: 'kobyjiujitsu',
        password: 'ilovesammi'
    }

    return (
        <div className='account-info-page-container'>
        
        <p>Your Account Information:</p>
        <p>First Name: &nbsp; {dummyCreds.firstName}</p>
        <p>Last Name: &nbsp; {dummyCreds.lastName}</p>
        <p>Email Address: &nbsp; {dummyCreds.emailAddress}</p>
        <p>Phone Number: &nbsp; {dummyCreds.phoneNumber}</p>
        <p>Username: &nbsp; {dummyCreds.username}</p>
        <p>Password: &nbsp; {dummyCreds.password}</p>

        <button>Edit Account Info</button>

        {/* ACCOUNT INFO PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export default AccountInfoPage