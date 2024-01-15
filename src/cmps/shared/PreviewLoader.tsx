import ContentLoader from 'react-content-loader'

export const PreviewLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={480}
    viewBox='0 0 400 480'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    {/* User Avatar */}
    <circle cx='30' cy='30' r='20' />
    {/* Username */}
    <rect x='60' y='20' rx='4' ry='4' width='100' height='20' />
    {/* Post Image */}
    <rect x='0' y='60' rx='2' ry='2' width='400' height='400' />
    {/* Caption line */}
    <rect x='0' y='470' rx='4' ry='4' width='300' height='10' />
  </ContentLoader>
)
