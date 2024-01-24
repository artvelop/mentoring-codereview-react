const Star_KEY = 'star_list';

const StarService = {
  getStar() {
    return JSON.parse(localStorage.getItem(Star_KEY) as string);
  },
  removeStar(id: string) {
    let removeLocalList = StarService.getStar().filter((el: string) => {
      return el !== id;
    });
    localStorage.setItem(Star_KEY, JSON.stringify(removeLocalList));
  },
  setStar(id: string) {
    let localListString = localStorage.getItem(Star_KEY);
    let localList: string[] = localListString ? JSON.parse(localListString) : [];

    localList.push(String(id));
    localStorage.setItem(Star_KEY, JSON.stringify(localList));
  },
};

export default StarService;
