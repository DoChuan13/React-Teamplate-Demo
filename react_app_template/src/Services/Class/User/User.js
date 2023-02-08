class User {
  constructor(userId, profile) {
    this.userId = userId;
    this.profile = id;
    this.favorite = [];
    this.carts = [];
    this.bought = [];
  }
  getProfile() {
    return this.profile;
  }
  setProfile(profile) {
    this.profile = profile;
  }
}

export default User;
