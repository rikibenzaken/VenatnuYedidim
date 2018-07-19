﻿using Service.Utilities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Service.Entities
{
    [DataContract]
    public class Avrech : Person
    {
        public static List<Avrech> GetAllAvrechim(int? iPersonId)
        {
            try
            {
                DataRowCollection drc = SqlDataAccess.ExecuteDatasetSP("TAvrech_SLCT", new SqlParameter("iPersonId", iPersonId)).Tables[0].Rows;
                List<Avrech> avrech = ObjectGenerator<Avrech>.GeneratListFromDataRowCollection(drc);

                return avrech;
            }
            catch (Exception ex)
            {
                Log.LogError("GetAvrechim / TAvrech_SLCT", ", ex " + ex);
                return null;
            }
        }

        public static List<Person> GetAvrechStudents(int iPersonId)
        {
            try
            {
                DataRowCollection drc = SqlDataAccess.ExecuteDatasetSP("TStudent_ByAvrechId_SLCT", new SqlParameter("iPersonId", iPersonId)).Tables[0].Rows;
                List<Person> students = ObjectGenerator<Person>.GeneratListFromDataRowCollection(drc);
                return students;
            }
            catch (Exception ex)
            {
                Log.LogError("GetAvrechStudents / TAvrechStudents_ByAvrechId_SLCT", ", ex " + ex);
                return null;
            }
        }

        public static bool DeleteAvrechStudent(int iAvrechId, int iStudentId)
        {
            try
            {
                SqlDataAccess.ExecuteDatasetSP("TAvrechStudents_DEL", new SqlParameter("iAvrechId", iAvrechId), new SqlParameter("iStudentId", iStudentId));
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static Avrech GetAvrechById(int? iPersonId)
        {
            try
            {

                DataRow drc = SqlDataAccess.ExecuteDatasetSP("TAvrech_GetAvrechById_SLCT", new SqlParameter("iPersonId", iPersonId)).Tables[0].Rows[0];
                Avrech avrech = ObjectGenerator<Avrech>.GeneratFromDataRow(drc);

                return avrech;
            }
            catch (Exception ex)
            {
                Log.LogError("GetAvrechim / TAvrech_SLCT", ", ex " + ex);
                return null;
            }
        }

        public static bool UpdateAvrech(Avrech avrech, int iUserId)
        {
            try
            {
                List<SqlParameter> parameters = ObjectGenerator<Avrech>.GetSqlParametersFromObject(avrech);
                parameters.Add(new SqlParameter("iUserId", iUserId));
                SqlDataAccess.ExecuteDatasetSP("TPerson_UPD", parameters);
                return true;
            }
            catch (Exception ex)
            {
                Log.LogError("UpdateAvrech / TPerson_UPD", "ex" + ex);
                return false;
            }
        }

    }
}