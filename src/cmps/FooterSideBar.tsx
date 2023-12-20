export function FooterSideBar() {
  return (
    <div className='footer-side-bar'>
      <div className='user-preview my-profile'>
        <div className='img-container'>
          <img
            className='avatar'
            src='https://res.cloudinary.com/dmldeettg/image/upload/v1697302095/profile_phgx3i.png'
            alt='profile-img'
          />
          <div className='user-details'>
            <span>Yonatanbenzeev</span>
            <span>Yonatan Ben Ze'ev</span>
          </div>
        </div>
        <div className='switch'>
          <p>Switch</p>
        </div>
      </div>
    </div>
  )
}
