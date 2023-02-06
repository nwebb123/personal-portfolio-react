import { React } from "react";

function Contact() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: "",
  //     value: "",
  //   });

  //   function handleChange(event) {
  //     console.log(event);
  //     const { name, value } = event.target;
  //     setFormData((prevFormData) => {
  //       return {
  //         ...prevFormData,
  //         [name]: value,
  //       };
  //     });

  //     console.log(formData.name);
  //   }

  function Submit(event) {
    const formEl = document.querySelector("form");
    event.preventDefault();

    console.log("Submitted!");

    const formData = new FormData(formEl);

    fetch(
      "https://script.google.com/macros/s/AKfycbzjsCTxBdTrTKS46fUYLiFdDLoYLEsZ5ZFLSsfECBE9fStfOUKgSUnbqQQozpGLA9_y/exec",
      {
        method: "POST",
        body: formData,
      }
    )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <section id="contact" className="my-1 py-3 pt-16">
      <div className="text-center my-3 py-3">
        <h1 className="font-semibold text-3xl ">Contact</h1>
        <div className="mx-auto w-28 h-1 bg-black rounded border-0 dark:bg-gray-800 "></div>
      </div>

      {/* Form utilizes controlled inputs */}
      <div className="block p-6 rounded-lg  bg-white max-w-2xl mx-auto">
        <form id="form" onSubmit={(event) => Submit(event)}>
          {/* Name */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700">
              Name:
            </label>
            <input
              name="Name"
              //   onChange={handleChange}
              type="text"
              //   maxLength={15} minLength={1}
              //   value={formData.name}
              aria-describedby=""
              placeholder="Joe Shmoe"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700">
              Email address:
            </label>
            <input
              name="Email"
              //   onChange={handleChange}
              type="email"
              placeholder="Jshmoe@thebomb.com"
              //   value={formData.email}
              aria-describedby=""
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700">
              Phone:
            </label>
            <input
              name="Phone"
              //   onChange={handleChange}
              type="text"
              //   maxLength={15} minLength={1}
              //   value={formData.phone}
              aria-describedby=""
              placeholder="(123) 456-7890"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700">
              Subject:
            </label>
            <input
              name="Subject"
              //   onChange={handleChange}
              type="text"
              //   maxLength={15} minLength={1}
              aria-describedby=""
              placeholder="What's up Doc?"
              //   value={formData.subject}
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700">
              Message:
            </label>
            <textarea
              name="Message"
              //   onChange={handleChange}
              placeholder="Text area here"
              //   value={formData.comments}
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Submit button */}
          <div className="mb-3">
            <button
              type="submit"
              className="flex        
   mx-auto
      px-6
      py-1.5
      bg-cyan-600
      text-white
      font-medium
      text-lg        
      rounded
      shadow-md
      hover:bg-cyan-700 hover:shadow-lg
      focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-cyan-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              {/* uppercase */}
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
