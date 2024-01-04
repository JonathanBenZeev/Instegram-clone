import { FC } from 'react'
import { useDropzone } from 'react-dropzone'
import { DragSvg } from './shared/Svg'
interface UploadImgPostProps {
  handelImg: (imageUrl:File)=>void
}

export const UploadImgPost: FC<UploadImgPostProps> = ({handelImg}) => {
  // const [image, setImage] = useState<File | null>(null)

  // useState(()=>{
  //   handelImg(image)
  // },[image])

  const { getRootProps, getInputProps } = useDropzone({
    // accept: 'image/*',
    onDrop: (acceptedFiles) => {
      // setImage(acceptedFiles[0])
      handelImg(acceptedFiles[0])
    },
  })

  return (
    <div className='create-post-container' {...getRootProps()}>
      <div className='create-post'>
        <input {...getInputProps()} />
        <div className='create-content'>
          <DragSvg />
          <p>Drag photos and videos here</p>
        </div>
        {/* {image && <img src={URL.createObjectURL(image)} alt='Preview' />} */}
        <div className='add-btn'>
          <span>Select from computer</span>
        </div>
      </div>
    </div>
  )
}
