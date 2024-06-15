import { useState } from 'react';

export function useUploadImage() {
  const [isDragging, setIsDragging] = useState(false);

  function uploadImage(imageFile: File) {
    const generateImage = URL.createObjectURL(imageFile);
    localStorage.setItem('@background', generateImage);
  }

  function handleDragOver(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();

    const { files } = ev.dataTransfer;

    if (!files) return;

    const getFirstFile = files.item(0);

    if (!getFirstFile || !getFirstFile.type.includes('image')) {
      // TODO: temporary latter create a toast notification
      // eslint-disable-next-line no-alert
      alert(`file is not a image, ${getFirstFile?.name}`);
      return;
    }

    setIsDragging(false);
    uploadImage(getFirstFile);
  }

  function handleUploadImage(ev: React.ChangeEvent<HTMLInputElement>) {
    const { files } = ev.target;

    if (!files) return;

    const getFirstFile = files.item(0);

    if (!getFirstFile || !getFirstFile.type.includes('image')) {
      // TODO: temporary latter create a toast notification
      // eslint-disable-next-line no-alert
      alert(`file is not a image, ${getFirstFile?.name}`);
      return;
    }

    uploadImage(getFirstFile);
  }

  function removeCustomBackground() {
    localStorage.removeItem('@background');
  }

  return {
    isDragging,
    handleUploadImage,
    removeCustomBackground,
    handlers: {
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
    },
  };
}
