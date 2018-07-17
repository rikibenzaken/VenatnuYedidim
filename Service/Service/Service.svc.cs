﻿using Service.Entities;
using Service.Utilities;
using System.Collections.Generic;

namespace Service
{
    public class Service : IService
    {
        #region User

        public List<User> GetUsersByPermittion(int iPersonId)
        {
            return User.GetUsers(iPersonId);
        }

        public User Login(string nvUserName, string nvPassword)
        {
            return User.Login(nvUserName, nvPassword);
        }

        public void SetUser(User user)
        {
            User.SetUser(user);
        }

        #endregion

        #region Student

        public List<Student> GetStudentList(int iUserId)
        {
            return Student.GetStudentList(iUserId);
        }



        public bool AddStudent(Student student, int iUserId)
        {
            return Student.AddStudent(student, iUserId);
        }


        public bool UpdateStudent(Student student, int iUserId)
        {
            return Student.UpdateStudent(student, iUserId);
        }


        public bool UpdateStatusStudent(int iPersonId, int iStatusType)
        {
            return Student.UpdateStatusStudent(iPersonId, iStatusType);
        }
        #endregion

        #region Avrech

        public List<Avrech> GetAllAvrechim(int? iPersonId)
        {
            return Avrech.GetAllAvrechim(iPersonId);
        }

      public bool UpdateAvrech(Avrech avrech)
    {
        return avrech.UpdateAvrech(avrech);
    }


        public bool AddEvent(Event oEvent)
        {
            return Event.AddEvent(oEvent);
        }

        public List<Event> GetEventsList(int iUserId)
        {
            return Event.GetEventsList(iUserId);
        }


        public List<Student> GetAvrechStudents(int iPersonId)
        {
            return Avrech.GetAvrechStudents(iPersonId);
        }

        public Avrech GetAvrechById(int? iPersonId)
        {
            return Avrech.GetAvrechById(iPersonId);
        }


        #endregion

        #region files

        public string SaveFileByBase64(string base64File, string fileName)
        {
            return Fileshandler.SaveFileByBase64(base64File, fileName);
        }


        #endregion
        #region SysTableRow
        public List<SysTableRow> GetValues(int iSysTableId)
        {
            return SysTableRow.GetValues(iSysTableId);
        }
        #endregion


        #region SysTables

        //public List<SysTables> GetAllNames(int iSysTableId)
        //{
        //    return SysTables.GetAllNames();
        //}

        #endregion

        #region Conversation
        public List<Conversation> GetConversations(int iPersonId)
        {
            return Conversation.GetConversations(iPersonId);
        }

        #endregion




        //public bool AddYeshiva(Yeshivot yeshiva)
        //{
        //    return Yeshivot.AddYeshiva();
        //}
      

    }
}
