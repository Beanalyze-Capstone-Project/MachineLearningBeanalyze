# Bean Leaf Disease Classification Project

## Overview

This project focuses on the classification of bean leaf diseases into three categories:  
1. Angular Leaf Spot  
2. Bean Rust  
3. Healthy Leaf  

We utilized the dataset provided on [Kaggle](https://www.kaggle.com/datasets/marquis03/bean-leaf-lesions-classification) to train and evaluate our model. The project leverages transfer learning using the VGG16 architecture with fine-tuning to improve classification accuracy.

The repo doesn't contain saved model and the dataset folder because of size constraint from github. Instead, we use [Google Drive](https://drive.google.com/drive/folders/1PwjcgcyMl4b8EKO_-9VkEHg7JNsaiqDI?usp=sharing) to store it.

---

## Dataset

The dataset consists of images of bean leaves categorized into three classes. The data is split as follows:
- **Training and Validation Split**: 80% training and 20% validation (from the `train` folder).  
- **Testing Split**: All images from the `val` folder are used for evaluation.

---

## Data Augmentation

To enhance the robustness of the model and prevent overfitting, we applied the following augmentations to the training data:
- **Random Flip**: Random horizontal and vertical flipping of images.  
- **Random Rotation**: Rotations applied to images by up to 20%.  
- **Random Zoom**: Zooming in and out on the image, with a height and width factor range of -20% to +20%.  
- **Random Contrast**: Adjusting the contrast of the images by up to 20%.  
- **Random Brightness**: Modifying the brightness of the images by up to 20%.  

These augmentations simulate variability in the dataset and help the model generalize better to unseen data.

---

## Model Architecture

We employed the **VGG16** architecture, pre-trained on the ImageNet dataset, as our base model with the top layers removed (`include_top=False`). 

### Fine-Tuning
To adapt the model to our specific task, we added custom fully connected layers:
1. Fully connected (Dense) layers with ReLU activation.
2. Dropout layers for regularization.
3. A final Dense layer with softmax activation for multi-class classification.

---

## Metrics

The following metrics were monitored during training and evaluation:
- **Accuracy** 
- **Precision** 
- **Recall**
- **F1 Score**

---

## Results

### Validation Data  
- **Accuracy**: 97.09%  
- **Precision**: 97.09%  
- **Recall**: 97.09%  
- **F1 Score**: 96.99%  

### Test Data  
- **Accuracy**: 97.74%  
- **Precision**: 97.74%  
- **Recall**: 97.74%  
- **F1 Score**: 97.77%  

---

## Model Export

The trained model was exported in the following formats for deployment:
1. **SavedModel**
2. **TensorFlow.js**

These formats enable flexible integration into different platforms, including mobile and web applications.
