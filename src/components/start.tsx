
function Start() {
    return (  
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 md:justify-around  mt-24 ">
        <div className="md:text-left "> {/* Div do texto */}
          <h1 className="font-bold text-2xl md:text-4xl">Olá,👋</h1>
          <h1 className="font-bold text-2xl md:text-4xl">Meu nome é</h1>
          <h1 className="font-bold text-2xl md:text-4xl bg-gradient-to-r from-blue-500 to-gray-500 text-transparent bg-clip-text">Marcelo Lima Gomes</h1>
          <h1 className="font-bold text-2xl md:text-4xl">Sou Desenvolvedor full stack</h1>
        </div>
        <div className=" md:text-center mt-5 md:mt-0"> {/* Div da imagem */}
        <img className="rounded-full border-4 border-solid border-pink-400/[.70]  max-w-[150px] min-w-[100px] md:max-w-none" src="https://github.com/marceloroot.png" alt="avatar" />
      </div>
      </div>
    );
  }
  
  export default Start;