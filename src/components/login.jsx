const Login = () => {
  return (
   <div class="container">
      <h1 class="heading text-info text-center mt-3">
        Log in page of Najot Ta`lim🎉
      </h1>
      <main class="main">
        <form
          class="shadow-lg p-3 mt-5 bg-body rounded w-50 mx-auto"
          action="POST"
        >
          <h4 class="text-center text-primary mb-4">Sign-Up</h4>
          <input
            class="form-control mb-4"
            type="text"
            placeholder="Name"
            required
          />
          <input
            class="form-control"
            type="password"
            placeholder="password"
            required
          />
          <button class="btn btn-primary mt-3 w-100" type="submit">
            Submit
          </button>
          <a class="text-center mt-3 d-block text-secondary" href="/"
            >Didn`t Sign Up ?</a
          >
        </form>
      </main>
    </div>
  )
}

export default Login;
