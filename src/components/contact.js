import { Container } from "react-bootstrap";
export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <h1>Contact me to discuss opportunities</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="web3form"
        >
          <input
            type="hidden"
            name="access_key"
            value="8a431012-2fcd-4659-ad37-4aa4ad5335d5"
          />
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="text" name="name" required className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              required
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div className="h-captcha" data-captcha="true"></div>
          <button type="submit" className="btn btn-primary">
            Submit Form
          </button>
        </form>
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </Container>
    </section>
  );
};
