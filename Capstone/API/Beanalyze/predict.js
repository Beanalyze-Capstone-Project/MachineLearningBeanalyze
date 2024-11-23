async function singlePrediction(imageElement) {
    try {

        const model = await tf.loadGraphModel('./23_Nov_2nd_TFJS/model.json');

        let tensor = tf.browser.fromPixels(imageElement)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims();

        const predictions = await model.predict(tensor).data();

        const highestProbabilityIndex = predictions.indexOf(Math.max(...predictions));
        const highestProbability = predictions[highestProbabilityIndex];

        if (highestProbability >= 0.65) {
            const classId = highestProbabilityIndex + 1;
            return { predictedClass: classId, probabilities: highestProbability };
        } else {
            return { predictedClass: 0, probabilities: highestProbability };
        }
    } catch (error) {
        console.error("Error during prediction:", error);
        return null;
    }
}

export { singlePrediction };

