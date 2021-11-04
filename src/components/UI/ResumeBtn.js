import React from 'react'
import Button from '@material-ui/core/Button'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
const ResumeBtn = () => {
  const onDownload = () => {
    const link = document.createElement('a')
    link.download = `resume.pdf`
    link.href = './resume.pdf'
    link.click()
  }
  return (
    <div>
      <Button
        endIcon={<CloudDownloadIcon />}
        variant='text'
        color='primary'
        size='small'
        onClick={onDownload}
        target='_blank'>
        Download CV
      </Button>
    </div>
  )
}

export default ResumeBtn
