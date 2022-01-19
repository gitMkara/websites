export const LoginStart = (userCreations) => ({
  type: "INITIAL_STATE",
});//

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});
