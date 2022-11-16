let instance: StudentService;

class StudentService {
  private baseURL = "https://crystal-pepsi.herokuapp.com/students";

  /**
   * @constructor
   */
  public static getInstance(): StudentService {
    if (!instance)
      instance = new StudentService();
    return instance;
  }

  async getStudents(): Promise<any> {
    try {
      const result = await fetch(this.baseURL, { 
          method: 'get', 
          headers: new Headers({
              'Authorization': '2444011b-7b70-4608-aa17-bdfb67359553' 
          })
      });
      const data = await result.json();
      return data;
    } catch (e) {
      return null;
    }
  }

  async getMeetings(studentName:string): Promise<any> {
    try {
      const result = await fetch(`${this.baseURL}/${studentName}/meetings`, { 
          method: 'get', 
          headers: new Headers({
              'Authorization': '2444011b-7b70-4608-aa17-bdfb67359553' 
          })
      });
      const data = await result.json();
      return data;
    } catch (e) {
      return null;
    }
  }


}

const studentService = StudentService.getInstance();
export { StudentService, studentService };
