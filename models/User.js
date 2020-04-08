const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google"],
    required: true,
  },
  local: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NDhANCgoKDQ8PDQ4ODQ0PDQ8ODQ0PFREXFhcRExMYHCggGBolGxMTITEhJSkrLi4uFx8zRDMtNzQ3LjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QALhABAAIAAwQKAgMBAQAAAAAAAAECAwQRITFBUQUSMjNhcXKBscEikUKh0WIj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7w8C9uzSfPdCaMhif8R7z/gKwtTkL86T7z/iHEy9676T5xtBGAAAAAAAAAAAAAAAAAAAAAAD3DpNpiK75B7h4c3nSsa/TSwMnWu235T47kmBgxSNI955pQAAAAQY2VrfhpPOGbjYNqTpaPKeEtlxi4cWjS0AxR3j4U0t1Z9p5w4AAAAAAAAAAAAAAAAAAB40ejsLZ1547I8mfEa7G3h16sREcIiAdAAAAAAAArZ7C61NY312x5cWU3Zhi4teraY5TIOQAAAAAAAAAAAAAAAAAd4Hbr6obTEwp0tE8phtgAAAAAAAAMjOx/6W9vhrsfNzriW89ARAAAAAAAAAAAAAAAAAA8bOWxOtSJ8NJ82OtZDG6s9WZ2W3eEg0wAAAAAAAc4lurEzPCNWJadZ1njMyvdI438Inxt/iiAAAAAAAAAAAAAAAAAAAADQyeb1/G86TwnmusJZwM5auy35R/cA1BXw83S38tPCdiaLRwmP2DoedaOcftDiZqld9ony2gnVc3mop+NdtvhXxs9M7KR1Y58VQCZ12yAAAAAAAAAAAAAAAAAAAACxhZO9t8dWPEFd40qZCsdqZn+k9ctSN1K/rUGM6iJ4Rb9S24rEboiHoMOYnjFv1LlvPJjXfEAwnrYtgUnfSv6Q3yFJ3TMf3AM0WcXJXru0tHhvVpjTZMTE8gAAAAAAAAAAAAAAAAEuXy9sSdmyOM8jLYM3tpwjfLWpSKxpWNIgEeBl603RrPOd6YAAAAAAAAAEWLg1vH5R78UoDJzOVmm3fXny80DctGsaSy85l+pOsdmd3h4ArgAAAAAAAAAAAAky1db1jx+NoNPK4XUrEcZ2z5pgAAAAAAAAAAAAAcY2HFqzWeLsBhWjSZid8ToLGfrpiT4xEq4AAAAAAAAAACfI95X3+JQJ8j3lff4kGsAAAAAAAAAAAAAAADN6S7cemPmVRb6T7cen7lUAAAAAAAAAAAT5HvK+/xKBPke8r7/Eg1gAAAAAAAAAAAAAAAZvSfbj0/cqi30n249P3KoAAAAAAAAAAAnyPeV9/iUCfI95X3+JBrAAAAAAAAAAAAAAAAzek+3Hp+5VFvpPtx6fuVQAAAAAAAAAABPke8r7/ABIA1gAAAAAAAAAAAAAAAZvSfbj0/cqgAAAAAAA//9k=",
    },
  },
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
