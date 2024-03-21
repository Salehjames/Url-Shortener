const Collaborate = () => {
  return (
    <>
      <div className="flex flex-col  lg:flex-row justify-center items-center gap-32 px-4 md:px-0">
        <img className="" src="src/assets/Invite.png" alt="" />
        <div>
          <div>
            <h4 className="bg-[#F7F9FC] w-fit p-1 text-[#0088FF]">
              Collaborate with your teamates
            </h4>

            <h1 className="font-bold text-3xl">Invite & Work Together</h1>

            <p className="leading-10 w-full md:w-[550px]">
              Invite your teammates within seconds and work together as team to
              manage your Links, Bio Pages and QR codes. Team members can can be
              assigned specific privileges and can work on different workspaces.
            </p>
          </div>

          <button className="bg-[#0088FF] p-3 my-5 mx-auto rounded-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
export default Collaborate;
