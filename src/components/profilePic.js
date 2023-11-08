import profilePic from "../image-logos/profilePic.jpg";

export const ProfilePic = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6">
          <div class="profile-card">
            <div class="profile-img">
              <img src={profilePic} />
            </div>
            <div class="profile-content">
              <h2 class="title">
                Mukti Zavery
                <span>Software Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6">
          <div class="about">
            <h5>Hi, I'm</h5>
            <h2>Mukti Zavery</h2>
            <span>
              {" "}
              "Professional" <a>Software Developer</a>
            </span>
            <p>
              "A problem-solving expert with a sharp critical mind, leading and
              adapting seamlessly. From pharmaceuticals to the classroom, now
              armed with coding skills from the School of Code. Ready to bridge
              science, education, and tech - let's create greatness together!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
