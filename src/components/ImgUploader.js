import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { storage } from '../utils/Firebase'

export const ImgUploader = (file, setImage, setPercent) => {
  if (!file) {
    alert('Please choose a file first!')
    return
  }

  const storageRef = ref(storage, `/files/${Date.now()}`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const prcnt = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      )
      setPercent(prcnt)
    },
    (err) => alert(err),
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setImage(url)
      })
    },
  )
}
