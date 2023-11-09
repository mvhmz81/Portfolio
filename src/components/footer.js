import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <section className="footer" id="footer">
      <Container>
        <h1>Contact me to discuss opportunities</h1>
        <form method="POST" id="form">
          <input
            type="hidden"
            name="access_key"
            value="8a431012-2fcd-4659-ad37-4aa4ad5335d5"
          />

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="name" className="form-control" id="name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>

      <script>
        {`
          const form = document.getElementById('form');
          const result = document.getElementById('result');

          form.addEventListener('submit', function (e) {
            const formData = new FormData(form);
            e.preventDefault();

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            result.innerHTML = "Please wait..."

            fetch('https://api.web3forms.com/submit/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: json
            })
              .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                  result.innerHTML = json.message;
                } else {
                  console.log(response);
                  result.innerHTML = json.message;
                }
              })
              .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
              })
              .then(function () {
                form.reset();
                setTimeout(() => {
                  result.style.display = "none";
                }, 3000);
              });
          });
        `}
      </script>
    </section>
  );
};
