const QQmap = (response) => {
  if (response.status === 0) {
    if (response['result']['ad_info']['addcode'] === 0) {
      if (!location.hostname.startsWith('www.')) {
        location.hostname = 'www.' + location.hostname;
      }
    } else {
      if (location.hostname.startsWith('www.')) {
        location.hostname = location.hostname.substr(4);
      }
    }
  }
};
