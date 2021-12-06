const error_codes = {
  E0: "undefined error occured",
  E1: "unexpected values recieved",
  E2: "token validation failed",
  E3: "email not found in database",
};

const logical_errors = {
  L0: "incorrect password",
  L1: "user already exists",
  L2: "bus not found in database",
};

const success_codes = {
  S0: "User created",
  S1: "Password correct",
  S2: "List of buses sent",
  S3: "Bus details was sent",
};

export default { error_codes, logical_errors, success_codes };
