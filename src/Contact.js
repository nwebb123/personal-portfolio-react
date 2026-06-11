import { React } from "react";
import Swal from "sweetalert2";

function Contact() {
  function Submit(event) {
    event.preventDefault();
    const formEl = document.querySelector("form");

    let nameInput = formEl[0];
    let emailInput = formEl[1];
    let subjectInput = formEl[2];
    let messageInput = formEl[3];

    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      subjectInput.value === "" ||
      messageInput.value === ""
    ) {
      Swal.fire({
        title: "Woops!",
        text: `Don't forget to fill out all fields before submitting!`,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d33",
      });
    } else {
      const formData = new FormData(formEl);

      fetch(
        "https://script.google.com/macros/s/AKfycbzjsCTxBdTrTKS46fUYLiFdDLoYLEsZ5ZFLSsfECBE9fStfOUKgSUnbqQQozpGLA9_y/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .catch((error) => console.error("Form submission error:", error));

      formEl.reset();

      Swal.fire({
        title: "Message Sent!",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#4f46e5",
      });
    }
  }

  return (
    <section id="contact" className="py-3 pt-16 bg-slate-300 dark:bg-slate-800">
      <div className="text-center my-3 py-3">
        <h1 className="font-semibold text-3xl text-gray-900 dark:text-white">
          Contact
        </h1>
        <div className="mx-auto w-28 h-1 bg-indigo-600 rounded border-0"></div>
      </div>

      <div className="block m-4 md:mx-auto p-6 max-w-2xl border border-black dark:border-indigo-600 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-xl">
        <form id="form" onSubmit={(event) => Submit(event)}>
          {/* Name */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700 dark:text-gray-200">
              Name:
            </label>
            <input
              name="Name"
              type="text"
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
        bg-white dark:bg-slate-600 dark:text-white
        bg-clip-padding
        border border-solid border-gray-300 dark:border-slate-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 dark:focus:text-white
        focus:bg-white dark:focus:bg-slate-600
        focus:border-indigo-600 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700 dark:text-gray-200">
              Email address:
            </label>
            <input
              name="Email"
              type="email"
              placeholder="youremail@site.com"
              aria-describedby=""
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white dark:bg-slate-600 dark:text-white
        bg-clip-padding
        border border-solid border-gray-300 dark:border-slate-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 dark:focus:text-white
        focus:bg-white dark:focus:bg-slate-600
        focus:border-indigo-600 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700 dark:text-gray-200">
              Phone:
            </label>
            <input
              name="Phone"
              type="text"
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
        bg-white dark:bg-slate-600 dark:text-white
        bg-clip-padding
        border border-solid border-gray-300 dark:border-slate-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 dark:focus:text-white
        focus:bg-white dark:focus:bg-slate-600
        focus:border-indigo-600 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700 dark:text-gray-200">
              Subject:
            </label>
            <input
              name="Subject"
              type="text"
              aria-describedby=""
              placeholder="Subject"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white dark:bg-slate-600 dark:text-white
        bg-clip-padding
        border border-solid border-gray-300 dark:border-slate-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 dark:focus:text-white
        focus:bg-white dark:focus:bg-slate-600
        focus:border-indigo-600 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="form-group mb-3">
            <label className="text-lg form-label inline-block mb-2 text-gray-700 dark:text-gray-200">
              Message:
            </label>
            <textarea
              name="Message"
              placeholder="Enter your message here"
              row={4}
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white dark:bg-slate-600 dark:text-white
        bg-clip-padding
        border border-solid border-gray-300 dark:border-slate-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 dark:focus:text-white
        focus:bg-white dark:focus:bg-slate-600
        focus:border-indigo-600 focus:outline-none"
            />
          </div>

          {/* Submit button */}
          <div className="my-1 py-3">
            <button
              type="submit"
              className="flex        
    mx-auto
      px-6
      py-1.5
      bg-indigo-600
      text-white
      font-medium
      text-lg        
      rounded
      shadow-md
      hover:bg-indigo-700 hover:shadow-lg
      focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

