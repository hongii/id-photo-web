async function fetchBgRemovedImage(photo: Blob | File) {
  const form = new FormData();
  form.append('image_file', photo);

  try {
    const response = await fetch('/clip/remove-background/v1', {
      method: 'POST',
      headers: {
        'x-api-key':
          'a01e71c5ca56f715cfcc5233ef967007f30a67eea3c1e10b16bd637039f34c2001f7a04e472caf6f0a18292d0472920a',
      },
      body: form,
    });
    if (!response.ok) {
      throw await response.json();
    }
    const blob = await response.blob();
    return { image: blob };
  } catch (error) {
    return Promise.reject(error);
  }
}

async function mockFetchBgRemovedImage(photo: Blob | File, isError: boolean) {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) reject(new Error('req failed'));
      resolve({ image: photo });
    }, 3000);
  });
  return res;
}

export { fetchBgRemovedImage, mockFetchBgRemovedImage };
