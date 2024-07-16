import React, { useEffect } from 'react';

const RedirectComponent = () => {
  useEffect(() => {
    // Redirige a la URL deseada
    window.location.href = 'https://egakat.colombiasoftware.net/index.php?#no-back-button';
  }, []);

  return (
    <div>
      <p>Redirigiendo...</p>
    </div>
  );
};

export default RedirectComponent;
