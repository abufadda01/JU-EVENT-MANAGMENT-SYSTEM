import React , {useState} from "react";



const BlogGallery=()=>{

    const [selectedImage, setSelectedImage] = useState(null);


    const images=[
        {id:1 , url:"image-1.jpg"  },
        {id:2 , url:"image-2.jpg"  },
        {id:3 , url:"image-4.jpg"  },
        {id:4 , url:"image-5.jpg"  },
        {id:5 , url:"image-6.jpg"  },
        {id:6 , url:"image-7.jpg"  },
        {id:7 , url:"image-8.jpg"  },
        {id:8 , url:"image-9.jpg"  },
        {id:9 , url:"image-10.jpg"  },
        {id:10 , url:"image-11.jpg"  },
        {id:11 , url:"image-12.jpg"  },
        {id:12 , url:"image-13.jpg"  },
        
       
    ];


    const handleImageClick = (image) => {
        setSelectedImage(image);
      };
    
      const handleModalClose = () => {
        setSelectedImage(null);
      };



       return <section className="blogGallery-section">
          <h2>Photo Gallery</h2>
      <div className="gallery row">
        {images.map((image) => (
          <div data-aos="fade-down"  key={image.id} className="image-container  ">
            <img
              src={image.url}
             
          
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-gallery"  onClick={handleModalClose} >
       
          
            <img src={selectedImage.url} alt={selectedImage.caption} />
           
            {/* <i class="far fa-times-circle" onClick={handleModalClose}></i> */}
          
        </div>
      )}

</section>
         
       
}


export default BlogGallery;