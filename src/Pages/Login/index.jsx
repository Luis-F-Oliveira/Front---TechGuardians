import LoginImg from"../../assets/loginImg.png"
const index = () => {
  const handleSubmit = () => {}
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-800 h-96 grid grid-cols-2 rounded">
        <div className="flex w-96 h-full justify-center items-center col-start-1 col-end-3">
          <form className="justify-center items-center flex-col flex w-96 mb-8" onSubmit={handleSubmit}>
          <h1 className="mb-8  font-bold text-3xl">Login</h1>
            <label className="mb-4">
              <span className="block mb-2">Email</span>
              <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 w-60"
              required placeholder="exemplo@exemplo.com"/>
            </label>
            <label className="mb-8">
              <span className="block mb-2">Senha</span>
              <input type="password" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 w-60"required placeholder="Senha"/>
            </label>
            <button type="button" className="py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-32">Login</button>
          </form>
        </div>
        <div className="flex flex-1 w-96 h-full justify-center items-center col-end-7 col-span-2">
         <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default index