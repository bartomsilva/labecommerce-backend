export function createId(length: number): string {
  let id: string = '';
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

export function formatDate(date: Date): string {

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hors = ('0' + date.getHours()).slice(-2);
  const minute = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  const dateFormated = year + '-' + month + '-' + day + ' ' + hors + ':' + minute + ':' + seconds;

  return dateFormated

}