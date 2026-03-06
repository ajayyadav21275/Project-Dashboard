export const loginUser = async (data) => {
  console.log("Mocking login with data:", data);

  if (!data.email || !data.password) {
    throw new Error("Email and Password are required");
  }
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    token: "mock-jwt-token-12345",
    message: "Login Successful"
  };
};