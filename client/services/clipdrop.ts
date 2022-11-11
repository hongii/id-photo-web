async function fetchBgRemovedImage(photo: Blob | File) {
  const URL = 'https://apis.clipdrop.co/remove-background/v1';
  const form = new FormData();
  form.append('image_file', photo);

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'x-api-key':
          '636d26ce39b3df7a94b7aa28d79b39995c885ac7ad0cb49968a1425ee45040e37ec4575f13313223d63c2ba15edecc16',
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
