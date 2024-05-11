function Time() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Chuyển đổi giờ sang định dạng 12 giờ
    hours = hours % 12 || 12;

    // Thêm số 0 trước nếu giờ, phút hoặc giây nhỏ hơn 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + amOrPm;

    return (
        <h2>
            {time}
        </h2>
    );
}

export default Time;