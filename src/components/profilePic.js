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
        <div class="col-xs-12 col-sm-12 col-md-6">
          <div class="about">
            <h2>Career Changer from Analytical to Teacher to developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
