class Profile {
  constructor(
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    placeOfBirth,
    address
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.address = address;
  }
  getFirstName() {
    return this.firstName;
  }
}

export default Profile;
