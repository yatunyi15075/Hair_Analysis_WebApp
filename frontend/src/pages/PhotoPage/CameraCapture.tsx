import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../../styles/CameraCaptureStyles';

const CameraCapturePage: React.FC<{
  setImageSrc: React.Dispatch<React.SetStateAction<string | null>>;
  setIsCameraView: React.Dispatch<React.SetStateAction<boolean>>;
  classifyImage: (file: File) => Promise<void>;
}> = ({ setImageSrc, setIsCameraView, classifyImage }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      }
    } catch (error) {
      alert('Camera not accessible or permission denied.');
      setIsCameraView(false);
    }
  };

  const capturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context?.drawImage(videoRef.current, 0, 0);
      const capturedImage = canvasRef.current.toDataURL('image/jpeg');
      setImageSrc(capturedImage);

      // Convert the captured image to a file and classify it
      const file = dataURLToFile(capturedImage, 'captured-photo.jpg');
      classifyImage(file);

      // Stop the camera and go back to the main view
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      setIsCameraView(false);
    }
  };

  const dataURLToFile = (dataUrl: string, fileName: string) => {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };

  return (
    <div className={styles.container}>
      <div className="relative">
        <video ref={videoRef} autoPlay className={styles.video}></video>
        <canvas ref={canvasRef} className="hidden"></canvas>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonGreen} onClick={openCamera}>
            Use Camera
          </button>
          <button className={styles.buttonPink} onClick={capturePhoto}>
            Capture Photo
          </button>
          <button className={styles.buttonRed} onClick={() => {
            setIsCameraView(false);
            const stream = videoRef.current?.srcObject as MediaStream;
            if (stream) stream.getTracks().forEach((track) => track.stop());
          }}>
            Close Camera
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraCapturePage;
