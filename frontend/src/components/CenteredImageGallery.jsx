import React from "react";
import { useTranslation } from "react-i18next";

const CenteredImageGallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: "https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg", text: t("gallery.chro") },
    { src: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg", text: t("gallery.vp") },
    { src: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg", text: t("gallery.avp") },
    { src: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg", text: t("gallery.seniorManager") },
    { src: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360", text: t("gallery.manager") },
    { src: "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg", text: t("gallery.productManager") },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-48 text-center">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.text}
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 text-gray-700 font-medium">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredImageGallery;
